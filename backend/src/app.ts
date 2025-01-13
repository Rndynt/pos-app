import express, { Request, Response } from 'express';
import cors from 'cors';

//routes
import apis from './routes/api';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req : Request, res : Response) => {
    res.json({ message: 'Hello from Backend!' });
});

//
app.use('/apis/', apis);



export default app;