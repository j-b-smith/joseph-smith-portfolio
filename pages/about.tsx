import React, { useEffect } from "react";
import ImageGallery from "../components/ImageGallery";
import Head from "next/head";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const About = () => {

  useEffect(() => {
    GoogleAnalytics.trackLinkClick("About Page View");
  }, []);


  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          About Joseph Smith | Remote QA Engineer & Test Automation Specialist
        </title>
        <meta
          name="description"
          content="Learn more about Joseph Smith, a Remote QA Engineer with expertise in test automation, regression testing, and CI/CD for SaaS and FinTech. Passionate about climbing, powerlifting, and road trips."
        />
        <meta
          name="keywords"
          content="
        Remote QA Engineer, Automation Engineer, Test Automation Specialist, 
        Test Engineer, Test Automation Expert, QA Automation, Software Tester, 
        SaaS QA, FinTech QA, Regression Testing, Manual Testing, Functional Testing, 
        End-to-End Testing, API Testing, REST API Automation, GraphQL Testing, 
        Integration Testing, Load Testing, Performance Testing, Cross-Browser Testing, 
        CI/CD Pipeline, Continuous Integration, Continuous Deployment, GitHub Actions, 
        Agile Testing, TDD (Test-Driven Development), BDD (Behavior-Driven Development), 
        Quality Assurance Best Practices, Automation Frameworks, Test Strategy, 
        Test Data Management, Test Case Management, Docker, CircleCI, Ansible, 
        Postman, Selenium, Cypress, Playwright, Python, TypeScript, JavaScript, 
        Remote Work QA, Remote Test Automation Engineer, Outdoor Enthusiast, 
        Rock Climbing, Bouldering, Sport Climbing, Trad Climbing, Powerlifting, 
        Strength Training, Outdoor Adventures, Hiking, Road Trips, Campervan Life, 
        Solo Camping, Van Life Adventures, National Parks Travel, Fitness Enthusiast, 
        Climbing with Friends, Climbing with Halle Schafer, Climbing with Himi, 
        Moab Adventures, Coastal Road Trips, Yosemite Travel, Redwoods Exploration"
        />
      </Head>

      <div
        className="container flex flex-col lg:flex-row gap-4 my-4 items-stretch pt-8 lg:h-[calc(100vh-7rem)]"
        data-cy="about-page"
      >
        <div
          className="bg-white shadow-lg rounded-lg p-4 flex-1 flex flex-col justify-between"
          data-cy="about-content"
        >
          <h1 className="text-3xl font-bold mb-4" data-cy="about-heading">
            About Me 🚀
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            Hey there! 👋 I&#39;m Joseph, and when &#39;m not diving deep into
            the world of quality automation, you&#39;ll probably find me scaling
            a rock face, lifting heavy at the gym, or exploring the great
            outdoors. I&#39;m passionate about pushing my limits, both in my
            professional life and in my personal pursuits. 🌟
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            My perfect weekend? It&#39;s all about climbing and camping with my
            friends, my girlfriend Halle, and my dog Himi. Whether it&#39;s
            bouldering, sport climbing, or trad climbing, I&#39;m all in. 🧗‍♂️
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            One of my favorite adventures was a 90-hour solo road trip where I
            camped in the Moab desert. After getting hailed on in my campervan,
            the sky cleared to reveal a double rainbow. 🌈🚐 It&#39;s those
            moments that remind me of the beauty and unpredictability of the
            world around us.
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            Powerlifting has taught me that every rep counts, just like every
            action we take in life. Whether it&#39;s hitting new PRs in the gym
            or solving a tricky problem while climbing, I&#39;ve realized there
            are many ways to approach challenges—and they all come with their
            own set of pros and cons. 💪🧩
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            If I had my dream adventure, I&#39;d pack up my van and drive down
            the coastal highway from Washington, taking in the breathtaking
            California redwoods and Yosemite. It&#39;s all about the journey and
            the sights along the way. 🚐🌲🌉
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 leading-snug"
            data-cy="about-description"
          >
            I&#39;ve also developed a deep passion for mycology over the years.
            Growing and cultivating mushrooms has become more than just a
            hobby—it&#39;s a science I dive into with the same focus I bring to
            my technical projects. Experimenting with new cultivation methods
            keeps me curious and constantly learning. 🍄🔬
          </p>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-snug"
            data-cy="about-description"
          >
            I&#39;m a fast-paced, excited person with a lot of ideas, always
            looking for the next challenge. Let&#39;s connect and see where our
            next adventure takes us! 🚀🌍
          </p>
        </div>

        {/* Image Gallery Card */}
        <div
          className="bg-white shadow-lg rounded-lg p-4 flex-1"
          data-cy="image-gallery-card"
        >
          <ImageGallery />
        </div>
      </div>
    </>
  );
};

export default About;
