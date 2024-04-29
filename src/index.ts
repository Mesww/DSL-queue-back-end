import express from 'express';
import "dotenv/config";
import { jwtValidate } from '../middleware/jwt.middleware';
import cookie from 'cookie-parser';
import session from 'express-session';

const path = require('path');
const cors = require('cors');
const passport = require('passport');

const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const queueRouter = require('./routes/queue.route');
const historyRouter = require('./routes/history.route');

const port = parseInt(process.env.PORT!) || 7777 ;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookie());

// jwtValidate
app.use("/users",userRouter);
app.use("/login",authRouter);
app.use("/queue",queueRouter);
app.use("/history",historyRouter);

app.listen(port,function () {
    console.log("Server is ready at ",port);
})