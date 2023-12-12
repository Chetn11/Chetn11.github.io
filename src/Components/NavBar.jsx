import React, { useState } from 'react'
import{FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';
// import Resume from "./Resume/Resume.pdf"



function NavBar() {
  const [nav,setNav]=useState(false);

  const links=[
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:"about"
    },
    {
      id:3,
      link:"skills"
    },
    {
      id:4,
      link:"projects"
    },
    {
      id:5,
      link:"contact"
    },
  ]

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.download = "Chetan_Patil_Resume.pdf";
    link.href = "Resume.pdf";
    link.click();
    window.open(
      "https://drive.google.com/file/d/1OZNtPI-N0zsPCZe2fCxQOogJ4f7UGoRO/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div id="nav-menu" className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed' >
    <div>
    <h1 className='text-5xl font-signature ml-2 cursor-pointer hover:scale-105 duration-200 '>Chetan</h1>
    </div>
      <ul className='hidden md:flex'>

      {links?.map(({link,id})=>(
        <li key={id} className={`nav-link ${link}  px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200`}>
        <Link to={link} smooth duration={500}>{link}</Link></li>
      ))}


        {/* <li className="nav-link home  text-xs px-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200"><Link to="#home" smooth duration={500}></Link>Home</li>
        <li className="nav-link about  text-xs px-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200">About</li>
        <li className="nav-link skills  text-xs px-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200">Skills</li>
        <li className="nav-link projects text-xs px-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200">Projects</li>
        <li className="nav-link contact  text-xs px-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200">Contact</li> */}
      </ul>
      <button onClick={handleResumeClick} id="resume-button-1" className="nav-link resume  group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300">Resume</button>
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 sm:hidden'>
        {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      {nav && (
        <ul className='nav-link home flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

        {links.map(({link,id})=>(
          <li  key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link  onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
        ))}
       {/* <li className='nav-link about px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li>
       <li className='nav-link skills px-4 cursor-pointer capitalize py-6 text-4xl'>About</li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Skills</li>
       <li className='nav-link projects px-4 cursor-pointer capitalize py-6 text-4xl'>Projects</li>
       <li className='nav-link contact px-4 cursor-pointer capitalize py-6 text-4xl'>Contact</li> */}

      </ul>
      )}
      
    </div>
  )
}

export default NavBar
