import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import connect from './utils/connect';

import articleRouter from "./routes/articles.route"
import adminRouter from "./routes/admin.route"
dotenv.config();


const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT;
app.listen(port, async() => {
  await connect();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);


  articleRouter(app);
  adminRouter(app);

  
});
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the server');
});
