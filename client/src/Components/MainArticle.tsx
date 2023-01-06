import React from 'react'
const image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
export default function MainArticle() {
  return (
    <div className=' w-full p-10 relative h-[750px] pt-5'>
        <div className='w-full rounded-xl h-[750px] bg-secondary'>
            <img src={image} className="w-full rounded-xl h-full object-cover opacity-80"></img>
        </div>
        <div className='w-4/5 absolute bottom-28 left-40 flex flex-col gap-5'>
            <h3 className=' text-white text-3xl'>Featured</h3>
            <h3 className=' text-white text-5xl font-bold'>Breaking Into Product Design: Advice From Untitled Founder, Frankie</h3>
            <h3 className=' text-white w-4/5'>In many cases, images are loaded from the server dynamically. Therefore, we do not know whether the color scheme of the image is light or dark. To make sure the text is always clear and easy to read, we’ll add a high-contrast background color with a certain amount of transparency around it.</h3>

        </div>
    </div>
  )
}
