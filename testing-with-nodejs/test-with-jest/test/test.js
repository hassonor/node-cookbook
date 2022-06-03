const uppercase = require("./../uppercase");

describe("uppercase", () => {
    test("uppercase orhasson returns ORHASSON", () => {
        expect(uppercase("orhasson")).toBe("ORHASSON");
    });
});

// Mocking with jest
describe("uppercase", () => {
    test("uppercase orhasson returns ORHASSON", () => {
        const uppercase = jest.fn(() => "ORHASSON");
        const result = uppercase("orhasson");
        expect(uppercase).toHaveBeenLastCalledWith("orhasson");
        expect(result).toBe("ORHASSON");
    })
})