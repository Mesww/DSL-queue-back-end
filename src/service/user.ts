import prisma from "../../prisma/client";
import { Role, User } from "@prisma/client";
export async function getUser() {
  return await prisma.user.findMany();
}
export async function addUser(user: {
  studentid: string;
  email: string;
  name: string;
  role: Role;
  channel: number;
  emailVerified?: boolean;
}) {
  await prisma.user.create({ data: user });
  return "Add success";
}
export async function getSpecificuser(user:{email: string, studentid?: string}) {
    console.log(user.studentid);
  const res = await prisma.user.findUnique({
    where: {
      email: user.email,
      studentid: user.studentid,
    },
  });
  return res;
}
