import axios from "axios";

const articlesUrl = "http://localhost:8000/articles/"


export const getArticles = ()=> axios.get(articlesUrl);
export const getMainArticle = ()=> axios.get(articlesUrl+ "main");
export const getArticle = (id: string)=> axios.post(articlesUrl+ "main");


