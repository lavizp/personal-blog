import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function WritePage() {
  return (
    <>
        <Navbar/>
        <div className='m-10 '>
          <input type="text" placeholder="Ttile" className="shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"></input>
          <textarea  placeholder="Description" className=" shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-96"></textarea>

        </div>
        <Footer/>
    </>
  )
}

export default WritePage