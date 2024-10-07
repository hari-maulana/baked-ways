import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
dotenv.config()


app.use(express.json()); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Backend is workinggg!');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
