import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignIn, SignUp} from "protocols";
import usersService from "services/users.service";

async function signUp(req: Request, res: Response) {
    const userData = req.body as SignUp;

    try {
        await usersService.createUser(userData);
        return res.sendStatus(httpStatus.CREATED);

    } catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

async function signIn(req: Request, res: Response) {
    const loginData = req.body as SignIn;

    try {
        const token = await usersService.signIn(loginData);
        return res.status(httpStatus.OK).send(token);
    }
    catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const usersController = {
    signUp,
    signIn
}

export default usersController;