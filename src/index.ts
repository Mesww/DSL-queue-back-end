import express from 'express';
import "dotenv/config";
import { jwtValidate } from './middleware/jwt.middleware';
import cookie from 'cookie-parser';
import session from 'express-session';
import {resetQueueOrder} from './service/queueRepository';

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

process.env.TZ = "Asia/Bangkok";
console.log(new Date().toLocaleString());

if (ringout()) {
    resetQueueOrder();
}

// jwtValidate
app.use("/users",userRouter);
app.use("/login",authRouter);
app.use("/queue",queueRouter);
app.use("/history",historyRouter);

app.listen(port,function () {
    console.log("Server is ready at ",port);
})


function ringout() :boolean{
  
    if (new Date().getHours() > 18) {
      return true;
    }
    return false;
  }