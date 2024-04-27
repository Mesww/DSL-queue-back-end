import express from 'express';

const authcontroller = require('../controller/auth.controller');


const router = express.Router();

// ! google auth
router.post("/google",authcontroller.googleauth);

router.get("/testrandomstudentid",authcontroller.testrandomstudenid);

module.exports = router;

