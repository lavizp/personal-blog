import React from 'react'
import ArticleType from '../Interfaces/Article'
import Article from './Article'

interface Props{
    articles: ArticleType[]
  }
 const ArticleList:React.FC<Props> = ({articles})=> {
  return (
    <div className="flex justify-center flex-wrap items-center gap-3 gap-y-14">
          {articles?.map((item: ArticleType)=><Article article={item} key={item._id}/>)}
        </div>
  )
}
export default ArticleList
