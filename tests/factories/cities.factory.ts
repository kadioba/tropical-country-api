import prisma from "../../src/configs/database";
import { faker } from "@faker-js/faker";

export function createCity() {
    return prisma.city.create({
        data: {
            name: faker.location.city(),
            country: faker.location.country(),
            image: faker.image.url(),
            description: faker.lorem.paragraph(),
        }
    })
}