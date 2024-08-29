import React from "react";
import ImageGallery from "../components/ImageGallery";

const About = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-4 my-4 items-stretch pt-8 lg:h-[calc(100vh-7rem)]">
      <div className="bg-white shadow-lg rounded-lg p-3 flex-1 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-3">About Me 🚀</h1>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-2 leading-tight">
          Hey there! 👋 I&#39;m Joseph, a Software Engineer with a focus on{" "}
          <strong>Quality Automation</strong>. My expertise lies in tools like{" "}
          <strong>Cypress</strong>, <strong>TypeScript</strong>,{" "}
          <strong>PyTest</strong>, <strong>Python</strong>,{" "}
          <strong>Selenium</strong>, and <strong>PHPUnit</strong>. I&#39;ve also
          worked with <strong>Playwright</strong>, <strong>React</strong>,{" "}
          <strong>Next.js</strong>, and <strong>Django</strong>. 🛠️
        </p>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-2 leading-tight">
          Beyond the code, I&#39;m passionate about music 🎸—I&#39;ve been playing
          guitar for around 15 years. My favorite genre&#39;s to play are metalcore and acoustic.
        </p>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-2 leading-tight">
          In my free time, I&#39;m the head routesetter at a local climbing gym 🧗‍♂️,
          and I&#39;m converting my Promaster van 🚐 into a mobile home for climbing
          trips with my dog, Himalaya 🐕, and my girlfriend.
        </p>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-2 leading-tight">
          Himalaya is the best adventure buddy I could ask for. I also enjoy
          cooking, powerlifting, weightlifting, and exploring the world of
          mushrooms 🍄. When I&#39;m not out exploring, I love watching Seinfeld 📺
          and dreaming about my next travel destination.
        </p>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 mb-2 leading-tight">
          I&#39;ve traveled to New York, Colorado, Salt Lake City, and Moab, Utah,
          and I frequently climb at the Red River Gorge in Kentucky. On my list
          of must-see places: the Redwood National Forest 🌲 and the San Juan
          Mountains for some mushroom hunting.
        </p>
        <p className="sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-tight">
          Let&#39;s connect and see where our next adventure takes us! 🚀
        </p>
      </div>

      {/* Image Gallery Card */}
      <div className="bg-white shadow-lg rounded-lg p-3 flex-1">
        <ImageGallery />
      </div>
    </div>
  );
};

export default About;
