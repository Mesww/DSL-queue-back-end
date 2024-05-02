// ! used for catch error
const asynchandler = require('express-async-handler');
import moment from 'moment-timezone';


import { $Enums } from '@prisma/client';
import { getAllqueues,getSpecific,getSpecificstatusrefuse,addQueue,updateQueuestatus,updateAllQueuestatus,updateQueuechannel,getCountqueuebefore,deleteQueue } from '../service/queueRepository';

// queueData
export const queue = asynchandler(async (req:any, res:any) => {
    const getQueue = await getAllqueues();
    // Convert each datetime field to Asia/Bangkok timezone
        getQueue.forEach((item: any) => {
            item.datetime = moment(item.datetime).tz('Asia/Bangkok').format();
        });
        
    res.status(200).send(getQueue);
})

// queueDataspecific.post
export const queueSpecific = asynchandler (async (req:any, res:any) => {
    const { queueid, studentID,channel,status } = req.query;
    const getQueueSpecific = await getSpecific({queueid:parseInt(queueid),studentID:studentID,channel:parseInt(channel),status:status});
    getQueueSpecific.forEach((item: any) => {
        item.datetime = moment(item.datetime).tz('Asia/Bangkok').format();
    });
    res.status(200).send(getQueueSpecific);
})

// queueDataspecificstatusrefuse.get
export const queueSpecificstatusrefuse = asynchandler(async (req:any,res:any) => {
    const {status1,status2} = req.query;
    const getQueueSpecificstatusrefuse = await getSpecificstatusrefuse({status1:status1,status2:status2});
    getQueueSpecificstatusrefuse.forEach((item: any) => {
        item.datetime = moment(item.datetime).tz('Asia/Bangkok').format();
    });
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
    console.log(queueid,channel);
    const getqueueupdateQueuechannel = await updateQueuechannel({queueid:queueid,channel:channel})
    res.status(200).send(getqueueupdateQueuechannel)
})

export const queueCountqueuebefore = asynchandler(async (req:any,res:any) => {
    const {queueidstring} = req.query
    console.log(queueidstring);
    const queueid = parseInt(queueidstring)
    const getqueueCountqueuebefore = await getCountqueuebefore({queueid:queueid})

    res.status(200).send({queuebefore:getqueueCountqueuebefore})
})

export const queuedeleteQueue = asynchandler(async (req:any,res:any) => {
    const {queueid} = req.query;

    const getqueuedeleteQueue = await deleteQueue({queueid:parseInt(queueid)})
    res.status(200).send(getqueuedeleteQueue)
})


