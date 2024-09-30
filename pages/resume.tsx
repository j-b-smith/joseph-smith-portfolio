import React, { useEffect } from "react";
import Head from "next/head";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ResumeSummaryCard from "../components/ResumeSummaryCard";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const Resume = () => {
  useEffect(() => {
    GoogleAnalytics.trackLinkClick("Resume Page View");
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
  
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Joseph Smith&#39;s Resume | QA Engineer & Automation Specialist</title>
        <meta
          name="description"
          content="View Joseph Smith's resume, an experienced QA Engineer skilled in Cypress, Selenium, Playwright, and automation testing for SaaS and FinTech industries. Explore his career experience, skills, and projects."
        />
        <meta
          name="keywords"
          content="
            Joseph Smith Resume, QA Engineer Resume, Test Automation Engineer Resume, 
            Cypress Expert Resume, Selenium Automation Engineer, Playwright Testing Resume, 
            Remote QA Engineer, FinTech Automation Testing, SaaS Automation Specialist, 
            QA Engineer Career, Test Automation Specialist Resume, GitHub Actions, 
            End-to-End Testing Resume, Automation Framework Developer, 
            Automation Testing Engineer Resume, CI/CD Pipeline Specialist, 
            Quality Assurance Resume, Software Testing Resume, 4 Years of Experience"
        />
      </Head>

      <div
        className="container mx-auto flex flex-col sm:text-s lg:flex-row gap-8 lg:h-[calc(100vh-4.5rem)] lg:py-8"
        data-cy="resume-page"
      >
        {/* Resume Summary Card */}
        <div className="flex-1 h-full" data-cy="resume-summary-card">
          <ResumeSummaryCard />
        </div>

        {/* PDF Viewer Card (Hidden on mobile) */}
        <div className="flex-1 h-full hidden lg:block my-8" data-cy="resume-pdf-viewer">
          <div className="border shadow-lg rounded-lg h-full w-full overflow-hidden">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/JosephSmithResume.pdf"
                plugins={[defaultLayoutPluginInstance]}
                withCredentials={false}
                data-cy="pdf-viewer"
              />
            </Worker>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
