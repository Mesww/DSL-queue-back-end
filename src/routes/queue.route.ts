import express from 'express';

import {queue,queueSpecific,queueSpecificstatusrefuse,queueaddQueue,queueUpdatestatus,queueupdateAllQueuestatus,queueupdateQueuechannel,queueCountqueuebefore,queuedeleteQueue} from '../controller/queue.controller';

const router = express.Router();

router.get("/getQueue",queue); 
router.post("/getQueueSpecific",queueSpecific)
router.get("/getqueueDataspecificstatusrefuse",queueSpecificstatusrefuse)
router.post("/getqueueaddQueue",queueaddQueue)
router.put("/getqueueUpdatestatus",queueUpdatestatus)
router.put("/getqueueupdateAllQueuestatus",queueupdateAllQueuestatus)
router.put("/getqueueupdateQueuechannel",queueupdateQueuechannel)
router.get("/getqueueCountqueuebefore",queueCountqueuebefore)
router.delete("/getqueuedeleteQueue",queuedeleteQueue)

module.exports = router;