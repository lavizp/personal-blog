import React from 'react'
const image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export default function Article() {
  return (
    <div className='h-[350px] w-[350px]  flex flex-col'>
        <div className='w-full h-full overflow-hidden pb-4'>
            <img src={image} className="w-full h-full rounded-xl "></img>
        </div>
        <h3 className='font-bold text-lg'>You cant be everything to everybody</h3>
        <h6 className='text-sm'>Untitled UI Icons are a clean, consistent, and neutral icon library crafted specifically for modern UI design.</h6>
    </div>
  )
}
