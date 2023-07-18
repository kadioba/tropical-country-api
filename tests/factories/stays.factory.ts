import prisma from "../../src/configs/database";
import { faker } from '@faker-js/faker';

export function createStay(cityId: number) {
    return prisma.stay.create({
        data: {
            name: faker.company.name(),
            description: faker.lorem.paragraph(),
            price: faker.number.int({ min: 100, max: 1000 }),
            image: faker.image.url(),
            guests: faker.number.int({ min: 1, max: 10 }),
            cityId: cityId,
        }
    })
}

export function createPicturesForStay(stayId: number) {
    return prisma.stayImage.createMany({
        data: [
            {
                url: faker.image.url(),
                stayId: stayId
            },
            {
                url: faker.image.url(),
                stayId: stayId
            },
            {
                url: faker.image.url(),
                stayId: stayId
            },
        ]
    })
}