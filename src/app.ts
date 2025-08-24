import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
const app: Application = express();

// Parser or Middleware
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello E-commerce Application! 😊');
});

// Not Found Route
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
