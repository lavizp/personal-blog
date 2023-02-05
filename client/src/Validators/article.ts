import ArticleType from "../Interfaces/Article";

export function articleValidator(article: ArticleType){
    if(article.author.name.length > 0 && article.main.length > 0 && article.title.length > 0 ){
        return true;
    }
    return false;
}