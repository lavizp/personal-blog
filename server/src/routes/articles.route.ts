import { Express}  from "express";
import { getArticles, getMainArticle,getArticle, writeArticle, searchArticles } from "../controllers/articles.controller"

const router =(app: Express)=>{
    app.get("/articles", getArticles)
    app.get("/articles/:id", getArticle)
    app.get("/main/article", getMainArticle)
    app.post("/writeArticle", writeArticle)
    app.get("/search/:title", searchArticles)

}



export default router