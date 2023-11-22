import React from 'react'

function About() {
  //about
  return (
    <div id='about' name="about" className='about section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p id="user-detail-intro" className='text-xl '>
            Hey everyone, I am Chetan Narendra Patil from Mumbai, India. An Aspiring Full
            Stack Web Developer, with specialization in MERN Stack.
            Additionally,I have learnt Data Structures and gained expertise in
            HTML, CSS, and JavaScript. I want to utilize my skills for
            development and to work in a highly competitive environment to seek
            solutions for problems, learn adaptability skills, create
            exceptional value and maximize my shell of experience thus
            developing a successful attitude towards living on the edge and
            become globally in demand.
        </p>
    </div>
    
    </div>
  )
}

export default About
