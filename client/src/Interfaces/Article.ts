import { AuthorInterface } from "./Author"

export default interface ArticleType{
    id: string,
    title: string,
    image: string,
    main: string,
    author: AuthorInterface
}