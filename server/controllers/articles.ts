import  express  from "express";
const dummy = [
    {
        id: "string",
        title: "string",
        image: "string",
        main: "string"
    },
    {
        id: "string",
        title: "string",
        image: "string",
        main: "string"
    }
]
export const getArticles = async(req: any,res: any) =>{
    res.status(200).send(dummy)
}