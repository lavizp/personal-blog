import ArticleType from "../Interfaces/Article";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from "../api/index"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const ArticlePage=()=> {
  const [article, setArticle] = useState<ArticleType>();
  const {id} = useParams();

  useEffect(()=>{
    const getArticle =async () => {
      if(id){

        let {data} = await api.getArticle(id)
        setArticle(data[0])
      }
    }
    getArticle()
  },[])
  return (
    <>
      
      <Navbar/>
      <div className=' w-full p-10 pt-5'>
        <h1 className="font-bold text-5xl pb-5">{article?.title}</h1>
        <div className='w-full rounded-xl h-[700px] bg-secondary'>
            <img src={article?.image} className="w-full rounded-xl h-full object-cover opacity-50"></img>
        </div>
        <h5 className="pt-5 text-lg">{article?.main}</h5>
    </div>
        <Footer/>
    </>
  )
}

export default ArticlePage