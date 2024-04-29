import express from 'express';

import {queue,queueSpecific,queueSpecificstatusrefuse,queueaddQueue,queueUpdatestatus,queueupdateAllQueuestatus,queueupdateQueuechannel,queueCountqueuebefore,queuedeleteQueue} from '../controller/queue.controller';

const router = express.Router();

router.get("/getQueue",queue);
router.post("/getQueueSpecific",queueSpecific)
router.get("/getQueueSpecificstatusrefuse",queueSpecificstatusrefuse)
router.post("/getqueueaddQueue",queueaddQueue)
router.put("/getqueueUpdatestatus",queueUpdatestatus)
router.put("/getqueueupdateAllQueuestatus",queueupdateAllQueuestatus)
router.put("/getqueueupdateQueuechannel",queueupdateQueuechannel)
//(--VVVV--)queueCountleft.get (งง) ไฟล์นี้ต้องใช้ getSpecificstatusrefuse,getCountqueuebefore
router.get("/getqueueCountqueuebefore",queueCountqueuebefore)
router.delete("/getqueuedeleteQueue",queuedeleteQueue)

module.exports = router;