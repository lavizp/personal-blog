import ArticleType from "../Interfaces/Article";

export function articleValidator(article: ArticleType){
    if(article.author || article.main || article.title ){
        return true;
    }
    return false;
}