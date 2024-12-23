// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (_: Request, res: Response) => {
    const indexPath = path.join(__dirname, '../dist', 'index.html');
    res.sendFile(indexPath);
});

app.get('/api/data', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});