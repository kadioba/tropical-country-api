import staysRepository from "repositories/stays.repository";

async function getStaysByCityId(cityId: number) {
    const stays = await staysRepository.getStaysByCityId(cityId);
    return stays;
}

async function getStayById(stayId: number) {
    const stay = await staysRepository.getStayById(stayId);
    return stay;
}

const staysService = {
    getStaysByCityId,
    getStayById
}

export default staysService;