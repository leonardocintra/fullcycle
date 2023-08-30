import ValueObject from "./value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject Unit Test", () => {
  it("should set value", () => {
    let vo = new StubValueObject("string teste");
    expect(vo.value).toBe("string teste");

    vo = new StubValueObject({ time_futebol: "São Paulo Futebol Clube" });
    expect(vo.value).toStrictEqual({ time_futebol: "São Paulo Futebol Clube" });
  });
});
