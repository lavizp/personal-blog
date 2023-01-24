import ArticleType from "../Interfaces/Article";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from "../api/index"
const ArticlePage=()=> {
  const [article, setArticle] = useState<ArticleType>();
  const {id} = useParams();

  useEffect(()=>{
    const getArticle =async () => {
      if(id){

        let {data} = await api.getArticle("1")
        setArticle(data[0])
      }
    }
    getArticle()
  },[])
  return (
    <div>{article?.main}</div>
  )
}

export default ArticlePage