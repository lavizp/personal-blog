import { useEffect, useState } from "react"
import Article from "../Components/Article"
import * as api from "../api/index"
import ArticleType from "../Interfaces/Article"
import ArticleList from "../Components/ArticleList"

export default function RecentBlogs() {
  const [articles, setArticles] = useState<ArticleType[]>([])
  useEffect(()=>{
    async function getArticles() {
        const {data} = await api.getArticles();
        setArticles(data.slice(1,9));

    }
    getArticles();

},[])

  return (
    <div className='w-full h-auto p-24 pt-10'>
        <h3 className="text-xl font-bold">Recent Blog Posts</h3>
        <ArticleList articles={articles}/>
    </div>
  )
}
