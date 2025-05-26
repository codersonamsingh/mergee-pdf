import { NextRequest, NextResponse } from 'next/server';
import PDFMerger from 'pdf-merger-js';

export const runtime = 'nodejs'; // Ensure this runs in Node.js, not edge

export async function POST(req: NextRequest) {
  // Parse the incoming form data
  const formData = await req.formData();
  const files = formData.getAll('files');

  if (!files || files.length < 2) {
    return NextResponse.json({ error: 'Please upload at least two PDF files.' }, { status: 400 });
  }

  const merger = new PDFMerger();

  try {
    for (const file of files) {
      // file is a Blob (from FormData)
      if ((file as Blob).type !== 'application/pdf') {
        throw new Error('One or more files are not valid PDFs.');
      }
      const arrayBuffer = await (file as Blob).arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      if (!buffer || buffer.length === 0) {
        throw new Error('One or more files are empty.');
      }
      await merger.add(buffer); // Remove the options object
    }
    const mergedPdfBuffer = await merger.saveAsBuffer();
    return new NextResponse(mergedPdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged.pdf"',
      },
    });
  } catch (err: any) {
    console.error('PDF Merge Error:', err);
    return NextResponse.json({ error: 'Failed to merge PDFs. ' + (err?.message || '') }, { status: 500 });
  }
}
