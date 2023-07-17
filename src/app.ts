import express, { Response } from 'express';
import router from './routers/index.router';


const app = express();

app.use(router)
app.get('/health', (req, res: Response) => res.send('OK'));

export default app