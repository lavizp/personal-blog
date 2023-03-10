import axios from "axios";

const articlesUrl = "http://localhost:8000/admin/"
export const getArticles = ()=> axios.get(articlesUrl + "getAllArticles");
export const getUnvalidatedArticles = ()=> axios.get(articlesUrl + "getUnvalidatedArticles");

export const validateArticle = (id: string)=> axios.get(articlesUrl+ "validateArticles/"+id);

export const unValidateArticle = (id: string) => axios.get(articlesUrl+"unValidateArticles/"+id);
export const loginAdmin = (email: string, password: string) => axios.post(articlesUrl+"login/", {email, password});





