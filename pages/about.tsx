import React from "react";
import ImageGallery from "../components/ImageGallery";

const About = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-4 my-4 items-stretch pt-8 lg:h-[calc(100vh-7rem)]">
      <div className="bg-white shadow-lg rounded-lg p-4 flex-1 flex flex-col justify-between">
        <h1 className="text-3xl font-bold mb-4">About Me 🚀</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug">
          Hey there! 👋 I&#39;m Joseph, and when I’m not diving deep into the world
          of quality automation, you’ll probably find me scaling a rock face, lifting heavy at the gym, or exploring the great outdoors. 
          I’m passionate about pushing my limits, both in my professional life and in my personal pursuits. 🌟
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug">
          My perfect weekend? It’s all about climbing and camping with my friends, my girlfriend Halle, 
          and my dog Himi. Whether it’s bouldering, sport climbing, or trad climbing, I’m all in. 🧗‍♂️
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug">
          One of my favorite adventures was a 90-hour solo road trip where I camped in the Moab desert. 
          I got hailed on in my campervan before the sky cleared, revealing a double rainbow. 
          (You can check out the photo in my gallery!) 🌈🚐
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug">
          I’ve learned from powerlifting that every rep adds up, just like every small action in our lives. 
          From climbing, I’ve realized that there are many ways to tackle a problem, and they all have their pros and cons. 💪🧩
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug">
          If I had my ultimate adventure, I’d take a road trip down the coastal highway from Washington to see 
          the California redwoods and Yosemite. 🚐🌲🌉
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-snug">
          I’m a fast-paced, excited person with a lot of ideas, always looking for the next challenge. 
          Let’s connect and see where our next adventure takes us! 🚀🌍
        </p>
      </div>

      {/* Image Gallery Card */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex-1">
        <ImageGallery />
      </div>
    </div>
  );
};

export default About;
