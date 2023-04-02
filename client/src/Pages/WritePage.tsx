import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as api from "../api/index"
import { useNavigate } from 'react-router-dom'
import { articleValidator } from '../Validators/article'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function WritePage() {
  const navigate = useNavigate()
  const [article, setArticle] = useState({
    title: "",
    image: "",
    main: "",
    author: {
      name: "",
      image: "",
      link: "",
  }
}
)
  const submitHandler = async(e: any) =>{
    e.preventDefault();
    if(!articleValidator({...article, _id: ""})){
      window.alert("Fill In All Details")
      return;

    }
      const {data} = await api.writeArticle(article);
      console.log(article)
      navigate("/")
  }
  return (
    <>
        <Navbar/>
        <div className='m-10 '>
        <h2 className='px-2 py-3 mt-4 mb-1 text-2xl'>Write Your Article:</h2>
        <h5 className='px-2 py-3 mb-4'>Send your article for review to the Developers, the article will be published with the Author included if the blog is well-suited for the webiste.</h5>

          <input type="text" placeholder="Ttile" className="shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 " onChange={e=>setArticle({...article, title: e.target.value})}></input>
          <input type="text" placeholder="Image Link" className="shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 " onChange={e=>setArticle({...article, image: e.target.value})}></input>
          <h2 className='py-2 px-3'>Description:</h2>
          <ReactQuill  placeholder="Description" className=" shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-96 mb-10" onChange={e=>setArticle({...article, main: e})}></ReactQuill>
          <h2 className='py-2 px-3 mt-4 mb-10 text-2xl'>About The Author:</h2>
          <input  placeholder="Author Name" className=" shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 mb-5" onChange={e=>setArticle({...article, author: {...article.author, name: e.target.value}})}></input>
          <input  placeholder="Author Image" className=" shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 mb-5" onChange={e=>setArticle({...article, author: {...article.author, image: e.target.value}})}></input>
          <input  placeholder="Author Website" className=" shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10" onChange={e=>setArticle({...article, author: {...article.author, link: e.target.value}})}></input>

          <button className='p-2 rounded-lg border-2 w-auto pl-4 pr-4 mt-10' onClick={e=>submitHandler(e)}>Submit</button>
        </div>
        <Footer/>

    </>
  )
}

export default WritePage