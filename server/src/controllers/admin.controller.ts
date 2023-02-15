import {Request,Response}  from "express";


import { getAllArticles, getSingleArticle,getUnvalidatedSingleArticle, getUnvalidatedArticles,getValidatedArticles } from "../services/articles.service"


export const getAllArticlesAdmin = async(req: Request,res: Response) =>{
    let data = await getValidatedArticles();

    res.status(200).json(data)
}

export const getUnvalidatedArticlesAdmin = async(req: Request, res: Response)=>{
    let data = await getUnvalidatedArticles();
    res.status(200).json(data)
}

export const validateArticle = async(req: Request, res: Response) =>{
    let articleId: string = req.params.id;
    try{
        let article = await getUnvalidatedSingleArticle(articleId);
        if(!article){
            return;
        }
        article.isvalidated = true;
        const newArticle = await article.save();
        res.status(200).json(newArticle)

    }catch(e){
        console.log(e)
    }


}
export const unValidateArticle = async(req: Request, res: Response) =>{
    let articleId: string = req.params.id;
    try{
        let article = await getSingleArticle(articleId);
        if(!article){
            return;
        }
        article.isvalidated = false;
        const newArticle = await article.save();
        res.status(200).json(newArticle)

    }catch(e){
        console.log(e)
    }


}

export const loginAdmin =async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;

    try{
        if(email == "laviz@laviz.laviz" && password == "laviz"){
            res.status(200).send("Login Success")
        }
        return;
    }catch(e){
        console.log(e)
    }
}