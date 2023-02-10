import { Express}  from "express";
import { getAllArticlesAdmin, getUnvalidatedArticlesAdmin, validateArticle } from "controllers/admin.controller";
const router =(app: Express)=>{
    app.get("/getAllArticles", getAllArticlesAdmin)
    app.get("/getUnvalidatedArticles", getUnvalidatedArticlesAdmin)
    app.put("/validateArticles/:id", validateArticle)


}



export default router