import express from 'express';

const usercontroller = require('../controller/user.controller');

const router = express.Router();

router.get("/getAlluser",usercontroller.userlist);

module.exports = router;

