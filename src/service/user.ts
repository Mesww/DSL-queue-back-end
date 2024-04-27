import prisma from '../../prisma/client';

export async function getUser() {
    return await prisma.user.findMany();
}