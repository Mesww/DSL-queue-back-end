
// ! used for catch error
const asynchandler = require('express-async-handler');


import { $Enums } from '@prisma/client';
import { getUser } from '../service/user';

module.exports.userlist = asynchandler(async (req: any,res: { send: (arg0: { id: number; email: string; studentid: string; name: string; role: $Enums.Role; channel: number; emailVerified: boolean | null; }[]) => void; }) => {
    const user = await getUser();
    res.send(user);
})
