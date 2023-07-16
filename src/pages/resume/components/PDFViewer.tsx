import React, { ReactNode, useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  children: ReactNode;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ children }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const convertToPdf = async (child: React.ReactElement<any>) => {
    const file = pdf(child);
    
    try {
      const blob = await file.toBlob();
      setPdfUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const child = React.Children.only(children) as React.ReactElement<any>;
    convertToPdf(child);
  }, [children]);

  return (
    <>
      {/* Pagination */}
      <div className="flex justify-center mb-5">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setIsTransitioning(true);
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <p>
            {currentPage} of {numPages}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setIsTransitioning(true);
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === numPages}
          >
            Next
          </button>
        </div>
      </div>
      <div
        className={`bg-slate-400 w-7/12 h-5/6 mx-auto page-transition ${
          isTransitioning && "transitioning"
        }`}
        onTransitionEnd={() => setIsTransitioning(false)}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={null}
        >
          <Page
            renderMode="canvas"
            pageNumber={currentPage}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </>
  );
};

export default PDFViewer;
