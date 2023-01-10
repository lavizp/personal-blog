import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import articleRouter from "./routes/articles"
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
console.log(port)
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.use("/articles", articleRouter);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});