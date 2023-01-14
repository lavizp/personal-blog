import ArticleType from "../Interfaces/Article";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from "../api/index"
const ArticlePage=()=> {
  const [article, setArticle] = useState<ArticleType>();
  const {id} = useParams();
  
  useEffect(()=>{
    const getArticle =async () => {
        let {data} = await api.getArticles()
        setArticle(data[0])
    }
    getArticle()
  },[])
  return (
    <div>ArticlePage</div>
  )
}

export default ArticlePage