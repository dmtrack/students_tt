import express from 'express';
import connection from './db/config';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.routes';
// const userRouter = require('./routes/user.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);

connection
    .sync()
    .then(() => {
        console.log('Database synced succesfully');
    })
    .catch((err) => {
        console.log('Err', err);
    });

app.listen(3000);
