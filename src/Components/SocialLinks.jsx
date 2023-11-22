import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa";


function SocialLinks() {
    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li id="contact-linkedin" className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md">
        <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='blank'
        className='flex justify-between items-center w-full text-white'>
        <>LinkedIn <FaLinkedin size={30}/></>
        </a>
        </li>
        <li id="contact-github" className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md'>
        <a href='https://github.com/Chetn11' target="_blank" className='flex justify-between items-center w-full text-white'>
        <>GitHub <FaGithub size={30}/></>
        </a>
        </li>
     
      </ul>
      <br/>
    </div>
  )
}

export default SocialLinks
