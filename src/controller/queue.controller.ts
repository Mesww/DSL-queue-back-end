// ! used for catch error
const asynchandler = require('express-async-handler');


import { $Enums } from '@prisma/client';
import { getAllqueues,getSpecific,getSpecificstatusrefuse,addQueue,updateQueuestatus,updateAllQueuestatus,updateQueuechannel,getCountqueuebefore,deleteQueue } from '../service/queueRepository';

// queueData
export const queue = asynchandler(async (req:any, res:any) => {
    const getQueue = await getAllqueues();
    res.status(200).send(getQueue);
})

// queueDataspecific.post
export const queueSpecific = asynchandler (async (req:any, res:any) => {
    const {studentID} = req.body;
    const getQueueSpecific = await getSpecific({studentID:studentID});
    res.status(200).send(getQueueSpecific);
})

// queueDataspecificstatusrefuse.get (งง)
export const queueSpecificstatusrefuse = asynchandler(async (req:any,res:any) => {
    const {status1,status2} = req.body;
    const getQueueSpecificstatusrefuse = await getSpecificstatusrefuse({status1:status1,status2:status2});
    res.status(200).send(getQueueSpecificstatusrefuse)
})

//queueCreate.post
export const queueaddQueue = asynchandler(async (req:any, res:any) => {
    const {studentID,type} = req.body;
    const getqueueaddQueue = await addQueue({studentID:studentID,type:type});
    res.status(200).send(getqueueaddQueue)
})

// queueUpdatestatus.put (put ไม่ติด)
export const queueUpdatestatus = asynchandler(async (req:any, res:any) => {
    const {queueid,status} = req.body
    const getqueueUpdatestatus = await updateQueuestatus({queueid:queueid,status:status})
    res.status(200).send(getqueueUpdatestatus)
})

// queueUpdateAll.put (put ไม่ติด)
export const queueupdateAllQueuestatus = asynchandler(async (req:any,res:any) => {
    const {status,changeStatus} = req.body
    const getqueueupdateAllQueuestatus = await updateAllQueuestatus({status:status,changeStatus:changeStatus})
    req.status(200).send(getqueueupdateAllQueuestatus)
})

// queueUpdatechannel.put (put ไม่ติด)
export const queueupdateQueuechannel = asynchandler(async (req:any,res:any) => {
    const {queueid,channel} = req.body
    const getqueueupdateQueuechannel = await updateQueuechannel({queueid:queueid,channel:channel})
    req.status(200).send(getqueueupdateQueuechannel)
})

// queueCountleft.get (งง) ไฟล์นี้ต้องใช้ getSpecificstatusrefuse,getCountqueuebefore
export const queueCountqueuebefore = asynchandler(async (req:any,res:any) => {
    const {queueid} = req.body
    const getqueueCountqueuebefore = await getCountqueuebefore({queueid:queueid})
    req.status(200).send(getqueueCountqueuebefore)
})

// queueDelete.delete
export const queuedeleteQueue = asynchandler(async (req:any,res:any) => {
    const {queueid} = req.body
    const getqueuedeleteQueue = await deleteQueue({queueid:queueid})
    req.status(200).send(getqueuedeleteQueue)
})


