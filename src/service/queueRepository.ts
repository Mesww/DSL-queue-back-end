import { Prisma } from '@prisma/client/extension';
import prisma from "../../prisma/client";
import { Role,QueueType,QueueStatus} from "@prisma/client";
export async function getAllqueues() {
    // const allQueues = await prisma.queue.findMany();
    // console.log(allQueues);
    return await prisma.queue.findMany();
}

export async function getSpecific(queue:{queueid?:number, studentID?:string,channel?:number,status?:QueueStatus}) {
  let res = [];
  if (Number.isNaN(queue.queueid) && queue.studentID === undefined ) {
    console.log(queue.channel);
    res = await prisma.queue.findMany({
      where:{
        channel:queue.channel,
        status:queue.status
      }
    })
  }else if(Number.isNaN(queue.queueid) === false){
    res.push(await prisma.queue.findUnique({
      where:{
        queueid:queue.queueid,
      }
    }))
  }else{
     res.push(await prisma.queue.findUnique({
      where:{
       studentID:queue.studentID
      }
    }))
  }
return res;
}


//! status can null because "?" after status2 
export async function getSpecificstatusrefuse(queue:{status1:QueueStatus,status2?:QueueStatus}) {

  const res = await prisma.queue.findMany({
    where:{
    
     NOT:{
    // !finde rows are not including queue.status1 or queue.status2  
      OR:[
        {status:queue.status1},
        {status:queue.status2}
      ]
     }
    }
  })
  return res;
}
export async function addQueue(queue:{studentID:string,type:QueueType}) {
   const res = await prisma.queue.create({data:{
    studentID:queue.studentID,
    datetime:new Date(),
    type:queue.type,
    channel:0,
    orders:0,
    status:QueueStatus.WAIT,
    rate:0,
    comment:""
}}) ;
  console.log("queueid : "+`${res.queueid}`);
  return res;
}
export async function updateQueuestatus(queue:{queueid:number,status:QueueStatus}) {
    const res = await prisma.queue.update({
        where: {
            queueid: queue.queueid,
          },
          data: {
            status: queue.status,
          },
      });
}

export async function updateAllQueuestatus(queue:{status:QueueStatus, changeStatus:QueueStatus}) {
  const res = await prisma.queue.updateMany({
    where: {
      status: queue.changeStatus,

    },
        data: {
          status: queue.status,
        },
    });
}

export async function updateQueuechannel(queue:{queueid:number,channel:number}) {
    console.log(queue);
    const res = await prisma.queue.update({
        where: {
            queueid: queue.queueid,
          },
          data: {
            status: QueueStatus.PROCESS,
            channel:queue.channel
          },
      });
    //   console.log(res);
}

export async function getCountqueuebefore(queue:{queueid:number}) {
  console.log(queue.queueid);
  try {
    const result = await prisma.queue.count({
      where: {
        status: {
          notIn:['FINISH','SKIP'] // Assuming 'FINISH' means completed
        },
        queueid: {
          lte: queue.queueid
        }
      }
    });
    console.log(`Queue items up to position ${queue.queueid}:`, result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}


export async function deleteQueue(queue:{queueid:number}) {
    const res = await prisma.queue.delete({
        where: {
        queueid: queue.queueid,
        },
      });
}