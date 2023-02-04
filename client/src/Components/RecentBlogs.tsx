import { useEffect, useState } from "react"
import Article from "./Article"
import * as api from "../api/index"
import ArticleType from "../Interfaces/Article"

interface ArticlesType{
  article: ArticleType[]
}
export default function RecentBlogs() {
  const [articles, setArticles] = useState<ArticleType[]>()
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
        <div className="flex justify-center flex-wrap items-center gap-3">
          {articles?.map((item: ArticleType)=><Article article={item} key={item._id}/>)}
        </div>
    </div>
  )
}
