import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ResumeSummaryCard from "../components/ResumeSummaryCard";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex flex-col min-h-full">
      <div
        className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch flex-grow pt-10 px-6"
        style={{ height: "calc(100vh - 10rem)" }}
      >
        <div className="lg:w-1/2 flex-shrink-0">
          <ResumeSummaryCard />
        </div>
        <div className="lg:w-1/2 flex-shrink-0 h-full overflow-hidden">
          <div className="border shadow-lg rounded-lg h-full w-full overflow-hidden">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/JosephSmithResume.pdf"
                plugins={[defaultLayoutPluginInstance]}
                withCredentials={false}
              />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
