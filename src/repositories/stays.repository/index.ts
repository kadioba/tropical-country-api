import prisma from "configs/database";

async function getStaysByCityId(cityId: number) {
    return await prisma.stay.findMany({
        where: {
            cityId
        }
    });
}

async function getStayById(stayId: number) {
    return await prisma.stay.findUnique({
        where: {
            id: stayId
        }
    });
}

const staysRepository = {
    getStaysByCityId,
    getStayById
}

export default staysRepository;
