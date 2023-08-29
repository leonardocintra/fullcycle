import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

describe("UniqueEntityId Unit Tests", () => {
  it("should throw when uuid is invalid", () => {
    // tive que colocar "as any" pois o validate é privado
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    expect(() => new UniqueEntityId("fake uuid")).toThrow(
      new InvalidUuidError()
    );
    expect(validateSpy).toBeCalledTimes(1);
  });
});
