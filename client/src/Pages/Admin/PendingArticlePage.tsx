import AdminNavbar from "../../Components/Admin/AdminNavbar"
import { useEffect, useState } from "react"
import AdminArticle from "../../Widgets/Admin/AdminArticle"
import ArticleType from "../../Interfaces/Article"
import * as api from "../../api/admin"
function PendingArticlePage() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  useEffect(()=>{
    async function getArticles(){

      let {data} = await api.getUnvalidatedArticles()
      setArticles(data);
    }
    getArticles();
  },[])
  return (
    <div>
        <AdminNavbar/>
        <div className="flex justify-center flex-wrap items-center gap-3 gap-y-14 mb-10">
          {articles.map((item: ArticleType)=> <AdminArticle article={item} isValidated={false} key = {item._id}/>)}
        </div>
    </div>
  )
}


export default PendingArticlePage