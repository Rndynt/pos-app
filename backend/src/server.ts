import express, { Request, Response } from 'express';
import cors from 'cors';

// const app = express();
// const PORT = 3000;

import app from './app';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
});
