import mongoose from "mongoose";
import AuthorModel from "./Author";
import { AuthorDocument } from "./Author";
export interface ArticleDocument{
    id: string,
    title: string,
    main: string,
    image: string,
    author: AuthorDocument
}

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    main: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    isvalidated: {
        type: Boolean,
        required: true,
        default: false
    },
    author: {
        type: AuthorModel.schema,
        require: true
    }
})
let ArticleModel = mongoose.model("Article", ArticleSchema);
export default ArticleModel;