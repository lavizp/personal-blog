import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import connect from './utils/connect';

import articleRouter from "./routes/articles"
dotenv.config();


const app: Express = express();
app.use(cors());

const port = process.env.PORT;
app.listen(port, async() => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

  await connect();

  articleRouter(app);

});
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the server');
});
