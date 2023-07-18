import prisma from "configs/database";

async function getStaysByCityId(cityId: number) {
    return await prisma.stay.findMany({
        where: {
            cityId
        },
        include: {
            city: true
        }
    });
}

async function getStayById(stayId: number) {
    return await prisma.stay.findUnique({
        where: {
            id: stayId
        },
        include: {
            city: true,
            images: true
        }
    });
}

const staysRepository = {
    getStaysByCityId,
    getStayById
}

export default staysRepository;
