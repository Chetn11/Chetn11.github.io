import React from 'react'

function About() {
  //about
  return (
    <div id='about' name="about" className='about section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-14 pt-14'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p id="user-detail-intro" className='text-2xl '>
            Hey everyone, I am Chetan Narendra Patil from Mumbai, India. An Aspiring Full
            Stack Web Developer, with specialization in MERN Stack.
            Additionally,I have learnt Data Structures and gained expertise in
            HTML, CSS, and JavaScript. I want to utilize my skills for
            development and to work in a highly competitive environment to seek
            solutions for problems, learn adaptability skills, focused on learning 
            new techniques to build real world websites while facilitating the growth
            of self and that of the organization.
        </p>
        <br/>
        <p className='text-2xl'>
          I have done my BE in Mechatronics Engineering from Terna Engineering College (Mumbai university),Navi Mumbai, Maharashtra.
          after Engineering, i have done three months internship in Motion Drive Tronics pvt. where i worked on two Automation related projects.
        </p>
        <p>
          
        </p>
    </div>
    
    </div>
  )
}

export default About
