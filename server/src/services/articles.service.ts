import {Request,Response}  from "express";
import { ArticleDocument } from "../models/Article";

import ArticleModel from "../models/Article"


const getAllArticles = async() =>{
    let data = await ArticleModel.find({});
    return data;
}

export const getValidatedArticles = async()=>{
    let data = await getAllArticles();
    let validatedData = data.filter(item => item.isvalidated === true);
    return validatedData;
}