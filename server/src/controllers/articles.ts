import  express,{Request,Response}  from "express";

const dummy = [
    {
        id: 0,
        title: "Why am I learning Web Development?",
        image: "https://miro.medium.com/max/1100/0*5J_Tn4-scqVoUHhF",
        main: "For people who do now know, I am a huge gamer and am working in the video games industry as a C# game programmer. I write backend code so front end web development has always been something I have no clue about"
    },
    {
        id: 1,
        title: "Six Months Of Learning React-JS",
        image: "https://miro.medium.com/max/1100/0*XfbbE4ZHhremu4mw",
        main: "I have spend around 6 months trying to learn React-JS. I tried learning by doing, writing code and building projects. In this article, I will explain what I did right, wrong and talk about my front end development journey."
    },
    {
        id: 2,
        title: "string",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        main: "string"
    }
]
export const getArticles = async(req: Request,res: Response) =>{
    res.status(200).json(dummy)
}
export const getArticle = async(req: Request,res: Response) =>{
    const id:string = req.params.id;
    try{
        let article = dummy.filter((item)=>{
            return item.id.toString() === id;
        })
        console.log(article)
        res.status(200).send(article)

    }catch(e){
        console.log(e)
    }
}
export const getMainArticle = async(req: Request, res: Response)=>{
    res.status(200).send(dummy[0])
}