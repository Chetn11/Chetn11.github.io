import React from 'react'
import bewakoof from "../assets/projects/Bewakoof.PNG"
import autoPart from "../assets/projects/Auto_part.PNG"
import sopa from "../assets/projects/sopa.PNG"
import stopWatch from "../assets/projects/stopwatch.PNG"

function Projects() {

  const handelUrl=(url)=>{
    window.open(
      url,
      "_blank"
    );
  }
  return (
    <div name="projects" id='projects' className='bg-gradient-to-b from-gray-800 to-black w-full h-fit  text-white pb-14'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            <p className='py-6'>Check out some of my projects right here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {/* project-1 */}
            <div className='project-card shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 '>
                <img src={bewakoof} alt='' className='rounded-md duration-200 hover:scale-105 w-full h-auto'/>
                <div className='flex items-center justify-center'>
                    <button className='project-deployed-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://chetn11.github.io/bewakoof-clone/")}
                    >Link</button>
                    <button className='project-github-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://github.com/Chetn11/bewakoof-clone")}
                    >GitHub</button>
                </div>
                <h5 className='project-title pl-4'>Bewakoof Clone</h5>
                <p className='project-description  m-auto pl-4 font-thin'>In this project we  make a clone of Bewakoof Ecommerce Website And and added functionally like Signup, Login, Search, Cart page, Payment Page.</p>
                <p className='project-tech-stack  m-auto pl-4 pt-4 font-bolt '>Tech Stacks use :</p>
                <ul className='m-auto pl-4 font-thin'>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Java Script</li>
                  <li>LocalStorage</li>
                </ul>
            </div>

           {/* project-2 */}

            <div className='project-card shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 '>
                <img src={autoPart} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='project-deployed-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://auto-part.netlify.app/")}
                    >Link</button>
                    <button className=' project-github-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://github.com/Chetn11/online-auto-part-shop")}
                    >GitHub</button>
                </div>
                <h5 className='project-title pl-4'>Auto-Parts</h5>
                <p className='project-description  m-auto pl-4 font-thin'>This is a Collaborative Project. In the website we added functionality like Signup, Login, Search, Product add to cart, Sorting, and Payment Gateway. </p>
                <p className='project-tech-stack m-auto pl-4 pt-4 font-bolt '>Tech Stacks use :</p>
                <ul className='m-auto pl-4 font-thin'>
                  <li>Html</li>
                  <li>Css</li>
                  <li>JavaScript</li>
                  <li>Json Server</li>

                </ul>
            </div>


            {/* project-3 */}
            <div className=' project-card shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 '>
                <img src={sopa} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='project-deployed-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://sopa-marketplace.vercel.app/")}
                    >Link</button>
                    <button className='project-github-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://github.com/monurajputrko/Sopa-Marketplace")}
                    >GitHub</button>
                </div>
                <h5 className='project-title pl-4'>sopa</h5>
                <p className='project-description  m-auto pl-4 font-thin'>In this project we  make a clone of sopa Website And  added functionally like Signup, Login, Search, Cart page, Payment Page and Backend Json Server.</p>
                <p className='project-tech-stack  m-auto pl-4 pt-4 font-bolt '>Tech Stacks use :</p>
                <ul className=' m-auto pl-4 font-thin'>
                  <li>React</li>
                  <li>Css</li>
                  <li>JavaScript</li>
                  <li>Jason Server</li>
                </ul>
            </div>


        {/* project-4 */}

        <div className='project-card shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 '>
                <img src={stopWatch} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='project-deployed-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://chetn11.github.io/stop-watch/")}
                    >Link</button>
                    <button className=' project-github-link w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={()=>handelUrl("https://github.com/Chetn11/stop-watch")}
                    >GitHub</button>
                </div>
                <h5 className='project-title pl-4'>Stop Watch</h5>
                <p className='project-description  m-auto pl-4 font-thin'>This is my first React project. its a basic stop watch in this i use some react hooks. And added functionality like start stop resume and reset. </p>
                <p className='project-tech-stack m-auto pl-4 pt-4 font-bolt '>Tech Stacks use :</p>
                <ul className='m-auto pl-4 font-thin'>
                  <li>React</li>
                  <li>Css</li>
                  <li>JavaScript</li>

                </ul>
            </div>



            
        </div>
      </div>
    </div>
  )
}

export default Projects
