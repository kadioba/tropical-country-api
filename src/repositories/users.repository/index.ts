import prisma from "configs/database";
import { SignUp } from "protocols";

async function createUser(userData: SignUp) {
    return prisma.user.create({
        data: userData
    })
}

async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

const usersRepository = {
    createUser,
    findUserByEmail
}

export default usersRepository;