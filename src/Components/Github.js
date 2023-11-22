
import GitHubCalendar from "react-github-calendar";
import React from 'react'

// github stats
function Github() {
  return (
    <div id="github" name="github" className=' w-full md:h-fit bg-gradient-to-b  from-black to-gray-800  '>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
    <div className="m-auto">
    <GitHubCalendar username="Chetn11" className="react-activity-calendar w-full m-auto"/>
    </div>
       
       {/* <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=Chetn11&theme=dark" alt="ChetanPatil" className="github-streak-stats m-auto pt-5"/></a> */}
       
       <br/>
       <img
        id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Chetn11&theme=neon&border_radius=2.7"
          alt="Chetan-Patil"
          className="w-4/6 m-auto"
        />
        <br/>
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=Chetn11&theme=neon&border_radius=2.7&show_icons=true"
          alt="Chetan-Patil"
          className=" w-4/6 m-auto"
        />
        <br/>
        <img
        id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=Chetn11&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D"
          alt="Chetan-Patil"
          className="w-4/6 m-auto"
        />

    </div>
   
 </div>
  )
}

export default Github
