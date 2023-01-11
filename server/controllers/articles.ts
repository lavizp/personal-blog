import  express  from "express";
const dummy = [
    {
        id: 0,
        title: "string",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        main: "string"
    },
    {
        id: 1,
        title: "string",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        main: "string"
    }
]
export const getArticles = async(req: any,res: any) =>{
    res.status(200).json(dummy)
}