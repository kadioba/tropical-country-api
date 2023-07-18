/* 
describe("POST /booking", () => {
    it("should return 200 and booking", async () => {
        const city = await createCity();
        const stay = await createStay(city.id);

        const response = await api.post("/booking").send({
            stayId: stay.id,
            userId: booking.userId,
            checkIn: booking.checkIn,
            checkOut: booking.checkOut
        });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: expect.any(Number),
            stayId: stay.id,
            userId: booking.userId,
            checkIn: booking.checkIn,
            checkOut: booking.checkOut
        });
    } */