import { Express}  from "express";
import { getArticles, getMainArticle,getArticle, writeArticle } from "../controllers/articles.controller"

const router =(app: Express)=>{
    app.get("/articles", getArticles)
    app.get("/articles/:id", getArticle)
    app.get("/main/article", getMainArticle)
    app.post("/writeArticle", writeArticle); 
}



export default router