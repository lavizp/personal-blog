import { AuthorInterface } from "./Author"

export default interface ArticleType{
    _id: string,
    title: string,
    image: string,
    main: string,
    author: AuthorInterface
}