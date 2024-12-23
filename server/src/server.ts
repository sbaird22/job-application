// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3001/api', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/', (_: Request, res: Response) => {
    const indexPath = path.join(__dirname, '../../client/dist', 'index.html');
    res.sendFile(indexPath);
});

app.get('/api/data', (_: Request, res: Response) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('api/auth/login', (_: Request, res: Response) => {
    res.json({ message: 'Login route' });
});

const users: { username: string; email: string; password: string }[] = []; // Example user storage

// Signup endpoint
app.post('/auth/signup', (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser  = users.find(user => user.username === username || user.email === email);
    if (existingUser ) {
        return res.status(400).json({ message: 'User  already exists' });
    }

    // Create a new user
    const newUser  = { username, email, password }; // In a real app, hash the password
    users.push(newUser );

    res.status(201).json({ message: 'User  created successfully' });
});

// const users: { username: string; password: string }[] = []; // Example user storage

// Login endpoint
app.post('/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find(user => user.email === email);

  // Check if user exists and password matches
  if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Successful login
  const token = generateToken(user); // Implement token generation logic

  function generateToken(_user: { username: string; email: string }): string {
    // Implement token generation logic here, e.g., using JWT
    return 'dummy-token'; // Replace with actual token generation logic
  }
  res.status(200).json({ token, message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});