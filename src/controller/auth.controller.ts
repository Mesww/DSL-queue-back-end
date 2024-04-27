// ! used for catch error
const asynchandler = require('express-async-handler');

import { auth } from '../service/auth';

module.exports.googleauth = asynchandler(
    async (req: { headers: { authorization: any; }; },res: any) => {
        const code = req.headers.authorization;
        // console.log(typeof code);
        console.log('Authorization Code:', code);
        await auth(code);
        
        res.status(200).json({ message: 'Authentication successful' });
    }
)