import express from 'express';

import {queue,queueSpecific,queueSpecificstatusrefuse,queueaddQueue,queueUpdatestatus,queueupdateAllQueuestatus,queueupdateQueuechannel,queueCountqueuebefore,queuedeleteQueue} from '../controller/queue.controller';

const router = express.Router();

router.get("/getQueue",queue); 
router.get("/getQueueSpecific",queueSpecific)
router.get("/getqueueDataspecificstatusrefuse",queueSpecificstatusrefuse)
router.post("/getqueueaddQueue",queueaddQueue)
router.put("/getqueueUpdatestatus",queueUpdatestatus)
router.put("/getqueueupdateAllQueuestatus",queueupdateAllQueuestatus)
router.put("/getqueueupdateQueuechannel",queueupdateQueuechannel)
router.get("/getqueueCountqueuebefore",queueCountqueuebefore)
router.delete("/getqueuedeleteQueue",queuedeleteQueue)
router.get("/testtime",(req,res)=>{
    const {date} = req.body;
    // console.log(new Date(date).toString);
    res.status(200).send({
        "dates": new Date(date).toString()
    });
})

module.exports = router;