import {Request,Response}  from "express";
import { ArticleDocument } from "../models/Article";

import ArticleModel from "../models/Article"
export const getArticles = async(req: Request,res: Response) =>{
    let data = await ArticleModel.find({});

    res.status(200).json(data)
}
export const getArticle = async(req: Request,res: Response) =>{
    const reqId:string = req.params.id;
    try{
        let article = await ArticleModel.findById(reqId)
        res.status(200).send(article)

    }catch(e){
        console.log(e)
    }
}
export const getMainArticle = async(req: Request, res: Response)=>{
    let data = await ArticleModel.find({});

    res.status(200).json(data[(data.length - 1)])
}

export const writeArticle = async(req:Request, res: Response)=>{
    
    try{
        const article = req.body;
        const newArticle = new ArticleModel(article);
        console.log(newArticle)
        await newArticle.save();
        res.status(200).json(newArticle)

    }catch(e){
        res.status(404).send(e)

    }

}

export const searchArticles =async (req: Request, res: Response) => {
    try{
        const parameter: string = req.params.title;
        let data = await ArticleModel.find({});
        let searchedData = data.filter((item)=>
            item.title?.toLowerCase().includes(parameter.toLowerCase())
        )
        res.status(200).json(searchedData)
    }catch(e){
        res.status(404).send(e)
    }
}