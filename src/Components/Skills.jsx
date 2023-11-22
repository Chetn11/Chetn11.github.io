import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png"
import github from "../assets/github.png"; 
import mongodb from "../assets/mongodb.png"

const Skills = () => {

  const skill=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-blue-500"
    },
    {
      id:3,
      src:javascript,
      title:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:react,
      title:"REACT",
      style:"shadow-blue-600"
    },
    {
      id:5,
      src:node,
      title:"NODE JS",
      style:"shadow-lime-400"
    },
    {
      id:6,
      src:github,
      title:"GitHub",
      style:"shadow-gray-400"
    },
    {
      id:7,
      src:mongodb,
      title:"MongoDB",
      style:"shadow-green-700"
    }

  ]

  // skills
  return (
    <div id="skills" name="skills" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen '>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
          <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-6'>These are the technologies I've worked with</p>
          </div>


          
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            skill?.map(({id,src,title,style})=>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img className="skills-card-img w-20 mx-auto" src={src} alt=''/>
              <p className="skills-card-name mt-4 ">{title}</p>
            </div>
            ))
          }
            
          </div>
       </div>
      
    </div>
  )
}

export default Skills
