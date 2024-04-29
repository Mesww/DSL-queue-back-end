import express from 'express';

import{histroyData,historyCreate} from '../controller/history.controller';
const router = express.Router();

router.get("/getHistory",histroyData);
router.post("/getHistoryCreate",historyCreate);


module.exports = router;