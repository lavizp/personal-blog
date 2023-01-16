import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import mongoose from 'mongoose';

import articleRouter from "./routes/articles"
dotenv.config();
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/blog-site",).then(()=>{
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}).catch((e)=>{
  console.log(e)
})

const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the server');
});
articleRouter(app);
