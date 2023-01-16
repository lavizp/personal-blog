import mongoose from "mongoose";

export interface ArticleDocument{
    id: string,
    title: string,
    main: string,
    image: string
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
    }
})
let ArticleModel = mongoose.model("Tasks", ArticleSchema);
export default ArticleModel;