import ArticleType from "../Interfaces/Article";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from "../api/index"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ArticleNotFound from "../Components/ArticleNotFound";
const ArticlePage=()=> {
  const [article, setArticle] = useState<ArticleType>();
  const {id} = useParams();
  const [isLoading, setLoading] = useState(true);
  useEffect(()=>{
    const getArticle =async () => {
      if(id){
        let {data} = await api.getArticle(id)
        setArticle(data)
        setLoading(false);
      }
    }
    getArticle()
  },[])



    if(!article){
      return (
          <>
            <Navbar/>

            { isLoading? <ArticleNotFound/> : <h1>Loading...</h1>}


          </>
        )
    }
  return (
    <>
      
      <Navbar/>
      
      <div className=' w-full p-10 pt-5'>
        <div className='w-full rounded-xl h-[700px] bg-secondary'>
            <img src={article?.image} className="w-full rounded-xl h-full object-cover opacity-50"></img>
        </div>
        <h1 className="font-bold text-5xl pb-5 md:px-40 pt-8">{article?.title}</h1>
         <p className="pt-4 text-lg md:px-40" dangerouslySetInnerHTML={{__html: article.main}}></p>
    </div>
        <Footer/>
    </>
  )
}

export default ArticlePage