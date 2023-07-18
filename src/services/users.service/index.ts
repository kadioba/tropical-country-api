import { SignIn, SignUp } from "protocols";
import usersRepository from "repositories/users.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(userData: SignUp) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await usersRepository.createUser(userData);
}

async function signIn(loginData: SignIn) {
    const user = await usersRepository.findUserByEmail(loginData.email);
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })
    return token;
}

const usersService = {
    createUser,
    signIn
}

export default usersService;