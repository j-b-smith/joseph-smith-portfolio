import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ResumeSummaryCard from "../components/ResumeSummaryCard";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex flex-col min-h-screen pb-4">
      <div
        className="container mx-auto flex flex-col gap-8 items-stretch flex-grow pt-10 px-4 sm:px-6"
        style={{ height: "auto" }}
      >
        <div className="w-full lg:w-1/2 mx-auto">
          <ResumeSummaryCard />
        </div>
        <div className="w-full lg:w-1/2 mx-auto h-full overflow-hidden">
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
