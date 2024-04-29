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

// queueDataspecificstatusrefuse.get
export const queueSpecificstatusrefuse = asynchandler(async (req:any,res:any) => {
    const {status1,status2} = req.query;
    const getQueueSpecificstatusrefuse = await getSpecificstatusrefuse({status1:status1,status2:status2});
    res.status(200).send(getQueueSpecificstatusrefuse)
})

//queueCreate.post
export const queueaddQueue = asynchandler(async (req:any, res:any) => {
    const {studentID,type} = req.body;
    const getqueueaddQueue = await addQueue({studentID:studentID,type:type});
    res.status(200).send(getqueueaddQueue)
})

// queueUpdatestatus.put
export const queueUpdatestatus = asynchandler(async (req:any, res:any) => {
    const {queueid,status} = req.body
    const getqueueUpdatestatus = await updateQueuestatus({queueid:queueid,status:status})
    res.status(200).send(getqueueUpdatestatus)
})

export const queueupdateAllQueuestatus = asynchandler(async (req:any,res:any) => {
    const {status,changeStatus} = req.body
    const getqueueupdateAllQueuestatus = await updateAllQueuestatus({status:status,changeStatus:changeStatus})
    res.status(200).send(getqueueupdateAllQueuestatus)
})

export const queueupdateQueuechannel = asynchandler(async (req:any,res:any) => {
    const {queueid,channel} = req.body
    const getqueueupdateQueuechannel = await updateQueuechannel({queueid:queueid,channel:channel})
    res.status(200).send(getqueueupdateQueuechannel)
})

export const queueCountqueuebefore = asynchandler(async (req:any,res:any) => {
    const {queueidstring} = req.query
    const queueid = parseInt(queueidstring)
    const getqueueCountqueuebefore = await getCountqueuebefore({queueid:queueid})
    res.status(200).send(getqueueCountqueuebefore)
})

export const queuedeleteQueue = asynchandler(async (req:any,res:any) => {
    const {queueid} = req.body
    const getqueuedeleteQueue = await deleteQueue({queueid:queueid})
    res.status(200).send(getqueuedeleteQueue)
})


