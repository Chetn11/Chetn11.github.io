import React from 'react'

function Contact() {
  // contacts
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='pt-6 text-center' id="contact-email">Email : cnpatil00@gmail.com</p>
            <p className=' text-center' id="contact-phone">Phone : 7710991461</p>
            <p className='text-center py-4'>-- OR --</p>
            <p className='pt-4 text-center'>Submit the form below to grt in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/2a98fee5-6bb0-4825-a0cd-f2df78997cb9' method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type='text'
                  name='name'
                  placeholder='   Enter Your Name'
                  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <input type='text'
                  name='email'
                  placeholder='  Enter Your Email'
                  className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <textarea name='message' rows="5" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
