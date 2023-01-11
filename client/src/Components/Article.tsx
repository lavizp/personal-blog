import React from "react"
import ArticleType from "../Interfaces/Article"
interface Props{
  article: ArticleType
}
const Article: React.FC<Props>=({article}) =>{
  return (
    <div className='h-[350px] w-[350px]  flex flex-col'>
        <div className='w-full h-full overflow-hidden pb-4'>
            <img src={article.image} className="w-full h-full rounded-xl "></img>
        </div>
        <h3 className='font-bold text-lg'>{article.title}</h3>
        <h6 className='text-sm'>Untitled UI Icons are a clean, consistent, and neutral icon library crafted specifically for modern UI design.</h6>
    </div>
  )
}

export default Article
