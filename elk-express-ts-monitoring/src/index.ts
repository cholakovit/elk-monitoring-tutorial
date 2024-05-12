// src/index.ts
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import logger from './helper/logger';
import appRouter from './router/appRouter';

// Configure dotenv at the very top of your file
dotenv.config();

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  logger.info('Hello World!')
  res.send('Hello World!');
});

app.use('/app', appRouter)

app.listen(process.env.PORT, () => {
  logger.info(`Server running on http://localhost:${process.env.PORT}`);
});
