import {Request,Response}  from "express";
import { ArticleDocument } from "../models/Article";

import ArticleModel from "../models/Article"


export const getAllArticles = async() =>{
    let data = await ArticleModel.find({});
    return data;
}

export const getValidatedArticles = async()=>{
    let data = await getAllArticles();
    let validatedData = data.filter(item => item.isvalidated === true);
    return validatedData;
}
export const getUnvalidatedArticles = async()=>{
    let data = await getAllArticles();
    let validatedData: any = data.filter(item => item.isvalidated === false);
    return validatedData;
}

export const getSingleArticle = async(id: string) =>{
    let article = await ArticleModel.findById(id)
    if(article?.isvalidated){
        return article;
    }
}