require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT: number | string = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', userRouter);

app.use(errorHandler);

const start = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`server started at port:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
