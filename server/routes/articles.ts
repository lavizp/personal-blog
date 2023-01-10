import express from "express"

//import { getTasks, updateTask, createTask,deleteTask  } from '../controllers/tasks.js'
import { getArticles } from "../controllers/articles"
const router = express.Router()

router.get("/", getArticles)
//router.post("/:id", createTask)
//router.patch("/:uid", updateTask)
//router.delete("/:uid", deleteTask)



export default router