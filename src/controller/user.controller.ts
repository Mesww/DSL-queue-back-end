
// ! used for catch error
const asynchandler = require('express-async-handler');


import { $Enums } from '@prisma/client';
import { getUser } from '../service/user';

module.exports.userlist = asynchandler(async (req: any,res: any) => {
    const user = await getUser();
    res.send(user);
})
