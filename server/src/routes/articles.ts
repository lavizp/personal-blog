import { Express}  from "express";
import { getArticles, getMainArticle,getArticle } from "../controllers/articles"

const router =(app: Express)=>{
    app.get("/articles", getArticles)
    app.post("/articles/:id", getArticle)
    app.get("/articles/main", getMainArticle)
    
}



export default router