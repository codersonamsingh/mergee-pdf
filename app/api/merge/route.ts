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
      const arrayBuffer = await (file as Blob).arrayBuffer();
      merger.add(Buffer.from(arrayBuffer));
    }
    const mergedPdfBuffer = await merger.saveAsBuffer();
    return new NextResponse(mergedPdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged.pdf"',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to merge PDFs.' }, { status: 500 });
  }
}
