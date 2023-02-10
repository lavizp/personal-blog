import {Request,Response}  from "express";


import { getAllArticles, getSingleArticle, getUnvalidatedArticles } from "../services/articles.service"


export const getAllArticlesAdmin = async(req: Request,res: Response) =>{
    let data = await getAllArticles();

    res.status(200).json(data)
}

export const getUnvalidatedArticlesAdmin = async(req: Request, res: Response)=>{
    let data = await getUnvalidatedArticles();
    res.status(200).json(data)
}

export const validateArticle = async(req: Request, res: Response) =>{
    let articleId: string = req.params.id;
    let article = await getSingleArticle(articleId);
    if(!article) {
        res.status(404).send("Milena");
        return;
    }
    article.isvalidated = true;
    const newArticle = await article.save();
    res.status(404).json(newArticle)
}