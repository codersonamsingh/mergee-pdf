import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-[#18181b] dark:to-[#23272f]">
      {/* Hero Section */}
      <header className="w-full py-10 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <div className="max-w-2xl text-center px-4">
          <div className="flex justify-center mb-4">
            <Image src="/file.svg" alt="PDF Merge Clerk" width={48} height={48} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            Merge PDFs Instantly
          </h1>
          <p className="text-lg sm:text-xl mb-6 font-medium opacity-90">
            The easiest, fastest, and most secure way to combine your PDF files. No
            sign-up required. 100% free.
          </p>
          <a
            href="#upload"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition"
          >
            Merge Your PDFs
          </a>
        </div>
      </header>

      {/* Upload Section */}
      <section
        id="upload"
        className="flex-1 flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 w-full max-w-xl flex flex-col items-center gap-6 border border-gray-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
            Upload your PDF files
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4 text-center">
            Drag & drop your PDFs here or click to select files. You can merge up
            to 10 files at once.
          </p>
          <div className="w-full flex flex-col items-center">
            <label className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded-xl py-10 bg-indigo-50 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-zinc-700 transition">
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
                type="file"
                accept="application/pdf"
                multiple
                className="hidden"
              />
            </label>
          </div>
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-lg">
            Merge PDFs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-zinc-900 dark:to-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/window.svg"
              alt="Easy to Use"
              width={40}
              height={40}
            />
            <h3 className="font-bold text-lg">Easy to Use</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Simple drag-and-drop interface. No learning curve.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/globe.svg"
              alt="Secure & Private"
              width={40}
              height={40}
            />
            <h3 className="font-bold text-lg">Secure & Private</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Your files never leave your browser. No uploads, no tracking.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/vercel.svg"
              alt="Lightning Fast"
              width={40}
              height={40}
            />
            <h3 className="font-bold text-lg">Lightning Fast</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Merge PDFs in seconds, right from your device.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials/Trust Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Trusted by thousands of users
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex-1">
              <p className="text-gray-700 dark:text-gray-200 italic">
                “The best PDF merger I’ve ever used. Fast, free, and no sign-up!”
              </p>
              <span className="block mt-2 text-sm text-gray-400">
                — Priya S.
              </span>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex-1">
              <p className="text-gray-700 dark:text-gray-200 italic">
                “Super simple and works perfectly every time. Highly recommended!”
              </p>
              <span className="block mt-2 text-sm text-gray-400">
                — Alex R.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 flex flex-col sm:flex-row items-center justify-between px-6 bg-white/80 dark:bg-zinc-900/80 border-t border-gray-100 dark:border-zinc-800 mt-auto">
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} PDF Merge Clerk. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="#"
            className="hover:underline text-indigo-600 dark:text-indigo-400"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline text-indigo-600 dark:text-indigo-400"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
