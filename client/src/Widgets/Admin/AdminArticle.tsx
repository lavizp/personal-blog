import React from "react"
import { Link } from "react-router-dom"
import ArticleType from "../../Interfaces/Article"
import * as api from "../../api/admin"
interface Props{
  article: ArticleType,
  isValidated: boolean
}
const AdminArticle: React.FC<Props>=({article, isValidated}) =>{
  const deleteArticle = async(e:any) =>{
      e.preventDefault()
      if(isValidated){
        let {data} = await api.unValidateArticle(article._id)
      }else{
        console.log("validating")
        let {data} = await api.validateArticle(article._id)
      }
      window.location.reload();

  }
  return (

    <div className='h-[350px] w-[350px]  flex flex-col'>

        <div className='w-full h-full overflow-hidden pb-4'>
            <img src={article.image} className="w-full h-full rounded-xl object-cover"></img>
        </div>
        <Link to={"/article/admin/"+ article._id}><h3 className='font-bold text-lg'>{article.title}</h3></Link>
        <h6 className='text-sm' dangerouslySetInnerHTML={{__html: article.main.slice(0,100)}}></h6>
        <div className="flex justify-start items-center gap-2 mt-2">
          <img className="rounded-full h-6 w-6" src={article.image} />
          <div className="text-sm">{article.author.name}</div>
          <button className="bg-red text-white font-bold py-1 px-4 rounded" onClick={(e)=>deleteArticle(e)}>{isValidated?"Delete":"Validate"}</button>

        </div>

    </div>

  )
}

export default AdminArticle