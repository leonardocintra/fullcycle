import { validate as uuidValidate } from "uuid";
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

  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const uuid = "11e551c0-862f-4570-8120-2dc316a2945d";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toBeCalledTimes(1);
  });

  it("should generate uuid", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const newUuid = new UniqueEntityId();
    expect(uuidValidate(newUuid.id)).toBeTruthy();
    expect(validateSpy).toBeCalledTimes(1);
  });
});
