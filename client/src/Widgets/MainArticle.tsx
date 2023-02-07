import React, { useEffect, useState } from 'react'
import ArticleType from "../Interfaces/Article"
import * as api from "../api/index"
import { Link } from 'react-router-dom';
import {TfiArrowCircleRight} from "react-icons/tfi"
 const MainArticle:React.FC=()=> {
  const [article, setArticle] = useState<ArticleType>();

  useEffect(()=>{
      const getMain = async()=>{
        let {data} = await api.getMainArticle();
        setArticle(data);
      }
      getMain();
  },[])
  return (
    

    <div className=' w-full p-10 relative pt-0'>
        <div className='w-full rounded-xl h-[700px] bg-secondary'>
            <img src={article?.image} className="w-full rounded-xl h-full object-cover opacity-50"></img>
        </div>
        <div className='w-4/5 absolute bottom-28 left-40 flex flex-col gap-5'>
            <h3 className=' text-white text-3xl'>Featured</h3>
            <h3 className=' text-white text-5xl font-bold mb-[-5px]'>{article?.title}</h3>
            <h3 className=' text-white w-4/5'>{article?.main.slice(0,200)}</h3>

        </div>
        <div className='absolute bottom-60 right-24'>
        <Link to = {"/article/" + article?._id}><h2 className='text-7xl text-white'><TfiArrowCircleRight/></h2></Link>
        </div>
    </div>
  )
}
export default MainArticle;
