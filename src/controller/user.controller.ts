
// ! used for catch error
const asynchandler = require('express-async-handler');


import { $Enums } from '@prisma/client';
import { getUser,addUser,getSpecificuser,editSpecificuser } from '../service/user';

module.exports.userlist = asynchandler(async (req: any,res: any) => {
    const user = await getUser();
    res.send(user);
})

export const useraddUser = asynchandler(async (req:any, res:any) => {
    const {studentid,email,name,role,channel,emailVerified} = req.body
    const getuseraddUser = await addUser({studentid:studentid,email:email,name:name,role:role,channel:channel,emailVerified:emailVerified});
    res.status(200).send(getuseraddUser)
})

export const usergetSpecificuser = asynchandler(async (req:any, res:any) => {
    const {email, studentid} = req.query
    const getusergetSpecificuser = await getSpecificuser({email:email,studentid:studentid})
    res.status(200).send(getusergetSpecificuser)
})

export const usereditSpecificuser = asynchandler(async (req:any, res:any) => {
    const {email,data} = req.body
    const getusereditSpecificuser = await editSpecificuser({email:email,data:data})
    res.status(200).send(getusereditSpecificuser)
})


