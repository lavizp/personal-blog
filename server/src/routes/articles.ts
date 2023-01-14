import { Express}  from "express";
import { getArticles, getMainArticle } from "../controllers/articles"

const router =(app: Express)=>{
    app.get("/articles", getArticles)
    app.get("/articles/main", getMainArticle)
    
}



export default router