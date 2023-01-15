import axios from "axios";

const articlesUrl = "http://localhost:8000/"


export const getArticles = ()=> axios.get(articlesUrl + "articles");
export const getMainArticle = ()=> axios.get(articlesUrl+ "main/article");
export const getArticle = (id: string)=> axios.get(articlesUrl+ "articles/"+id);


