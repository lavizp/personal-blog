import axios from "axios";

const articlesUrl = "http://localhost:8000/admin/"
export const getArticles = ()=> axios.get(articlesUrl + "getAllArticles");
export const getUnvalidatedArticles = ()=> axios.get(articlesUrl + "getUnvalidatedArticles");

export const validateArticle = (id: string)=> axios.get(articlesUrl+ "validateArticles/"+id);

export const unValidateArticle = (id: string) => axios.post(articlesUrl+"unValidateArticles/"+id);




