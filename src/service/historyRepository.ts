import { Prisma } from '@prisma/client/extension';
import prisma from "../../prisma/client";
import {Role,QueueType,QueueStatus} from "@prisma/client";
export async function getHistory() {
    // const allQueues = await prisma.queue.findMany();
    // console.log(allQueues);
    return await prisma.history.findMany();
}

export async function addHistory(history:{studentid:string,type:QueueType,rate:number,comment:string, orders:number,channel:number}) {
    const res = await prisma.history.create({data:{
        orders: history.orders,
        channel:history.channel,
        studentid:history.studentid,
        type:history.type,
        rate:history.rate,
        comment:history.comment,
 }}) ;
   console.log("queueid : "+`${res.historyid}`);
   return res;
 }