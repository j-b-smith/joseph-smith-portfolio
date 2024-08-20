import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ResumeSummaryCard from "../components/ResumeSummaryCard";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 pt-12" style={{ maxHeight: "calc(100vh - 7rem)" }}>
      {/* Resume Summary Card */}
      <div className="flex-1">
        <ResumeSummaryCard />
      </div>

      {/* PDF Viewer Card (Hidden on mobile) */}
      <div className="flex-1 hidden lg:block">
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
  );
};

export default Resume;
