import mongoose from "mongoose";

export interface AuthorDocument{
    name: string,
    image: string,
    link: string,
    about: string
}

const AuhorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    link:{
        type:String,
        require: true
    },
    about:{
        type:String,
        require: true
    }
})
let AuthorModel = mongoose.model("Tasks", AuhorSchema);
export default AuthorModel;