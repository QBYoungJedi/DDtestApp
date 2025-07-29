import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoute.js';
import dotenv from 'dotenv';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
