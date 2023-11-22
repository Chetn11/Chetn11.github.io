import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Resume from "./Resume/Resume.pdf"
import About from "./About";
import Skills from "./Skills";


const handleResumeClick = () => {
  const link = document.createElement("a");
  link.download = "Chetan_Resume.pdf";
  link.href = Resume;
  link.click();
  window.open(
    "https://drive.google.com/file/d/1X6Pj2zDGKnN-0rozzPtWb81wMcSpVBy8/view",
    "_blank"
  );
};

const Home = () => {
  return (
    <div id="home" name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

     <div className="flex flex-col justify-center h-full">

      <h2 id="user-detail-name" className="text-4xl sm:text-7xl font-bold text-white">Hey, I'm a Full Stack Developer</h2>
      <p id="user-detail-intro" className="text-gray-500 py-4 max-w-md">
      An aspiring Full-Stack Web Developer based in India,working on
      frontend and backend Technologies including HTML, CSS, JavaScript,
      React, Redux, NodeJS, ExpressJS & MongoDB.
      </p>
      <div>
      <a href="./Resume.pdf" download="Resume.pdf" target="_blank" rel="noreferrer">
        <button  id="resume-button-2" onClick={handleResumeClick}  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
        Resume<span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1"/></span>
        </button>
      </a>
      </div>
     </div>
     <div className="w-2/3 h-auto">
      <img src={HeroImage} alt="HeroImage" className="home-img rounded-full mx-auto w-2/4  md:w-full"/>
     </div>
    </div>
    </div>
  );
};

export default Home;
