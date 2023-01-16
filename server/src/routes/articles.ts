import { Express}  from "express";
import { getArticles, getMainArticle,getArticle } from "../controllers/articles.controller"

const router =(app: Express)=>{
    app.get("/articles", getArticles)
    app.get("/articles/:id", getArticle)
    app.get("/main/article", getMainArticle)
    
}



export default router