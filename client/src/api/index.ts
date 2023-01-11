import axios from "axios";

const articlesUrl = "http://localhost:8000/articles/"


export const getArticles = ()=> axios.get(articlesUrl);
