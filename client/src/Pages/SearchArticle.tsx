import React, {useState, useEffect, lazy} from 'react'
import * as api from "../api/index"
import ArticleType from '../Interfaces/Article'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const ArticleList = lazy(()=> import("../Components/ArticleList"))

import { useParams } from 'react-router-dom'
import ArticleNotFound from '../Components/ArticleNotFound'

export default function SearchArticle() {
  const {title} = useParams();
  const [articles, setArticles] = useState<ArticleType[]>([])
  useEffect(()=>{
    async function getArticles() {
        console.log(title)
        if(title){

          const {data} = await api.searchArticles(title);
          setArticles(data);

        }
    }
    getArticles();

},[title])
  return (
    <>
    <Navbar/>
    <div className='w-full h-auto p-24 pt-10'>
        <h3 className="text-xl font-bold mb-2">Search Result for " {title}"</h3>
        {articles.length > 0? <ArticleList articles={articles}/>: <ArticleNotFound/>}
        
    </div>
    <Footer/>
    </>
  )
}
