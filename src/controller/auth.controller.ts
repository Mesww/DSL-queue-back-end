// ! used for catch error
const asynchandler = require('express-async-handler');

import { auth } from '../service/auth';

import { addUser,getSpecificuser } from '../service/user';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
async function randomstudentid(studentid:string,email:string) {
    console.log(studentid);
    const is_include = await getSpecificuser({studentid:studentid,email:email}) !== null;
    let studentids = `${getRandomInt(100000000000)}`;
    console.log(`studentid : ${studentid}`);
    console.log(`studentids : ${studentids}`);
    console.log(`studentid is include in database : `+is_include);
    if (is_include) {
      return await randomstudentid(studentids,email);
    } else {
      return studentids;
    }
  }

module.exports.testrandomstudenid = asynchandler(async (req:any,res:any) => {
  const studentid = await randomstudentid("0","khumnoiw@gmail.com");

  res.status(200).json({message:studentid});
});
module.exports.googleauth = asynchandler(
    async (req: { headers: { authorization: any; }; },res: any) => {
        const code = req.headers.authorization;
        // console.log(typeof code);
        console.log('Authorization Code:', code);
        const userDetails = await auth(code);
      
        const is_include = await getSpecificuser({email:userDetails.email}) !== null;
        // console.log(is_include);
        if (is_include) {
          res.status(200).json({ message: 'Authentication successful' });
          return;
        }

        switch (userDetails.hd) {
            case "lamduan.mfu.ac.th":
             const response =  await addUser({
                    studentid: userDetails.email.split("@")[0],
                    email: userDetails.email,
                    name: userDetails.name,
                    role: 'STUDENT',
                    channel: 0
                })
            res.status(200).json({message:response});
                break;
            default:
                if (userDetails.email === "khumnoiw@gmail.com") {
                  const studentid = await randomstudentid("0",userDetails.email)
                  console.log(studentid);
                    const response =  await addUser({
                        studentid:studentid,
                        email: userDetails.email,
                        name: userDetails.name,
                        role: 'ADMIN',
                        channel: 0
                    })
                    res.status(200).json({message:response});
                    return;
                }
                break;
        }
        
    }
)


