import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function AboutPage() {
  return (
    <>
    <Navbar/>
        <div className='flex flex-col justify-start items-center gap-10 ml-20 mr-20'>
            <div className='w-96 h-96 bg-secondary'></div>
            <h1 className='text-5xl font-bold'>👨‍💻 About Me</h1>
            <div className='text-xl text-center'>Hello, I am Laviz Pandey. I am the blogger behind "---------------". I am a software developer with years of experience building scalable technologies. I write articles as a hobby hoping someday, someone in the world will benefit from the knowledge I have of software development.</div>
            <div className='w-28 h-2 bg-secondary'></div>
        </div>
    <Footer/>
    </>
  )
}

export default AboutPage