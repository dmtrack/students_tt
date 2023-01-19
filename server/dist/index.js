'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const sequelize = require('../');
const models = require('./models/models');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', userRouter);
app.use(errorHandler);
const start = () =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            yield sequelize.sync();
            app.listen(PORT, () => {
                console.log(`server started at port:${PORT}`);
            });
        } catch (e) {
            console.log(e);
        }
    });
start();
