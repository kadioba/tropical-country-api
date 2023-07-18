import staysService from "../services/stays.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getStaysByCityId(req: Request, res: Response) {
    const cityId = Number(req.params.cityId);

    try {
        const stays = await staysService.getStaysByCityId(cityId);
        return res.status(httpStatus.OK).send(stays);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function getStayById(req: Request, res: Response) {
    const stayId = Number(req.params.stayId);

    try {
        const stay = await staysService.getStayById(stayId);
        return res.status(httpStatus.OK).send(stay);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const staysController = {
    getStaysByCityId,
    getStayById
}

export default staysController;