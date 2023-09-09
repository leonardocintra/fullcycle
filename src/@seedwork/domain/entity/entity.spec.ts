import UniqueEntityId from "../value-objects/unique-entity-id.vo";
import BaseEntity from "./entity";
import { validate as uuidValidate } from "uuid";

class StubEntityBase extends BaseEntity<{ props1: string; prop2: number }> {}

describe("Base Entity Unit Tests", () => {
  it("should set props and id", () => {
    const arrange = {
      props1: "value1",
      prop2: 2,
    };
    const entity = new StubEntityBase(arrange);
    expect(entity.props).toStrictEqual(arrange);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it("should accept a valid uuid", () => {
    const arrange = {
      props1: "value1",
      prop2: 2,
    };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntityBase(arrange, uniqueEntityId);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).toBe(uniqueEntityId.value);
  });

  it("should convert a entity to a Javascript object", () => {
    const arrange = {
      props1: "value1",
      prop2: 2,
    };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntityBase(arrange, uniqueEntityId);
    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...arrange,
    });
  });
});
