import express from 'express';
const path = require('path');
const session = require('express-session');
import "dotenv/config";
const cors = require('cors');

const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');


const port = parseInt(process.env.PORT!) || 7777 ;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users",userRouter);
app.use("/login",authRouter);

app.listen(port,function () {
    console.log("Server is ready at ",port);
})