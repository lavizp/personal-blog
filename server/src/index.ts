import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"

import articleRouter from "./routes/articles"
dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
articleRouter(app);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});