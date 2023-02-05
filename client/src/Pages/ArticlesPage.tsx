import { useEffect, useState } from "react"
import Article from "../Components/Article"
import * as api from "../api/index"
import ArticleType from "../Interfaces/Article"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
interface ArticlesType{
  article: ArticleType[]
}
export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleType[]>()
  useEffect(()=>{
    async function getArticles() {
        const {data} = await api.getArticles();
        setArticles(data);
    }
    getArticles();

},[])

  return (
    <>
    <Navbar/>
    <div className='w-full h-auto p-24 pt-10'>
        <h3 className="text-xl font-bold mb-2">All my Articles:</h3>
        <div className="flex justify-center flex-wrap items-center gap-3">
          {articles?.map((item: ArticleType)=><Article article={item} key={item._id}/>)}
        </div>
    </div>
    <Footer/>
    </>
  )
}
