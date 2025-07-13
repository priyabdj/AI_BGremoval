import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

const app = express();
await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("API Working");
});

export default app;
