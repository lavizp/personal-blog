import React from "react"
import { Link } from "react-router-dom"
import ArticleType from "../../Interfaces/Article"
interface Props{
  article: ArticleType
}
const AdminArticle: React.FC<Props>=({article}) =>{
  return (
    <Link to={"/article/"+ article._id}>

    <div className='h-[350px] w-[350px]  flex flex-col'>
        <div className='w-full h-full overflow-hidden pb-4'>
            <img src={article.image} className="w-full h-full rounded-xl object-cover"></img>
        </div>
        <h3 className='font-bold text-lg'>{article.title}</h3>
        <h6 className='text-sm' dangerouslySetInnerHTML={{__html: article.main.slice(0,100)}}></h6>
        <div className="flex justify-start items-center gap-2 mt-2">
          <img className="rounded-full h-6 w-6" src={article.image} />
          <div className="text-sm">{article.author.name}</div>

        </div>
    </div>
    </Link>
  )
}

export default AdminArticle