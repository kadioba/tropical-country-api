import supertest from "supertest";
import { createCity } from "./factories/cities.factory";
import { createStay } from "./factories/stays.factory";
import app from "../src/app";


const api = supertest(app);

describe("GET /stays/cityId", () => {
    it("should return 200 and stays in the city", async () => {
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
                cityId: stay.cityId
            }
        ]);
    });
});
