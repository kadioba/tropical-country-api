import express, { Response } from 'express';
import router from './routers/index.router';

// Create Express server
const app = express();

app.use(express.json());
app.use(router);
app.get('/health', (req, res: Response) => res.send('OK'));

export default app