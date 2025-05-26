"use client";
import React, { useRef, useState } from "react";

function PdfMergeUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files).filter(f => f.type === "application/pdf");
    // Merge with existing files, avoid duplicates by name+size
    const mergedFiles = [...selectedFiles, ...newFiles].filter(
      (file, idx, arr) =>
        arr.findIndex(f => f.name === file.name && f.size === file.size) === idx
    );
    setSelectedFiles(mergedFiles.slice(0, 10));
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    // Reset input value to allow re-selecting the same file(s)
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleMerge = async () => {
    if (selectedFiles.length < 2) {
      setError("Please select at least two PDF files.");
      return;
    }
    setMerging(true);
    setError(null);
    const formData = new FormData();
    selectedFiles.forEach(f => formData.append("files", f));
    try {
      const res = await fetch("/api/merge", {
        method: "POST",
        body: formData,
      });
      if (res.headers.get('content-type')?.includes('application/pdf')) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "merged.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setMerging(false);
        return;
      } else {
        const data = await res.json();
        setError(data.error || "Failed to merge PDFs.");
        setMerging(false);
        return;
      }
    } catch (err) {
      setError("Failed to merge PDFs.");
      setMerging(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <label
        className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded-xl py-10 bg-indigo-50 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-700 transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-indigo-400 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-8m0 0l-3 3m3-3l3 3m-9 4a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
        <span className="text-indigo-500 font-medium">
          Click to upload or drag files here
        </span>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={handleInputChange}
        />
      </label>
      {selectedFiles.length > 0 && (
        <ul className="mt-4 w-full text-sm text-gray-700 dark:text-gray-200">
          {selectedFiles.map((file, idx) => (
            <li key={idx} className="truncate">{file.name}</li>
          ))}
        </ul>
      )}
      {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
      <button
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-lg disabled:opacity-60"
        onClick={handleMerge}
        disabled={merging || selectedFiles.length < 2}
      >
        {merging ? "Merging..." : "Merge PDFs"}
      </button>
    </div>
  );
}

export default PdfMergeUpload;
