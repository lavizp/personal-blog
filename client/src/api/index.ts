import axios from "axios";

const articlesUrl = "http://localhost:8000/"
export const getArticles = ()=> axios.get(articlesUrl + "articles");
export const getMainArticle = ()=> axios.get(articlesUrl+ "main/article");
export const getArticle = (id: string)=> axios.get(articlesUrl+ "articles/"+id);

export const writeArticle = (garticle: any) => axios.post(articlesUrl+"writeArticle",garticle);

export const searchArticles = (title:string) => axios.get(articlesUrl+"search/"+ title);


