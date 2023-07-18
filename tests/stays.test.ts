import supertest from "supertest";
import { createCity } from "./factories/cities.factory";
import { createPicturesForStay, createStay } from "./factories/stays.factory";
import app from "../src/app";


const api = supertest(app);

describe("GET /stays/cityId", () => {
    it("should return 200 and stays by cityId", async () => {
        const city = await createCity();
        const stay = await createStay(city.id);

        const response = await api.get(`/stays/${city.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                id: stay.id,
                name: stay.name,
                description: stay.description,
                price: stay.price,
                image: stay.image,
                guests: stay.guests,
                cityId: stay.cityId,
                city: {
                    id: city.id,
                    name: city.name,
                    image: city.image,
                    country: city.country,
                    description: city.description,
                }
            }
        ]);
    });
});

describe("GET /stays/stayId", () => {
    it("should return 200 and stay by id", async () => {
        const city = await createCity();
        const stay = await createStay(city.id);
        await createPicturesForStay(stay.id);

        const response = await api.get(`/stay/${stay.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: stay.id,
            name: stay.name,
            description: stay.description,
            price: stay.price,
            image: stay.image,
            guests: stay.guests,
            cityId: stay.cityId,
            city: {
                id: city.id,
                name: city.name,
                image: city.image,
                country: city.country,
                description: city.description,
            },
            images: expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    url: expect.any(String),
                    stayId: stay.id
                })
            ])
        });
    }
    );
});