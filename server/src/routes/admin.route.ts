import { Express}  from "express";
import { getAllArticlesAdmin, getUnvalidatedArticlesAdmin, validateArticle, unValidateArticle,loginAdmin } from "../controllers/admin.controller";
const router =(app: Express)=>{
    app.get("/admin/getAllArticles", getAllArticlesAdmin)
    app.get("/admin/getUnvalidatedArticles", getUnvalidatedArticlesAdmin)
    app.get("/admin/validateArticles/:id", validateArticle)
    app.get("/admin/unValidateArticles/:id", unValidateArticle)
    app.post("/admin/login", loginAdmin)




}



export default router