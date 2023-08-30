import { deepFreeze } from "../utils/objects";
import ValueObject from "./value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject Unit Test", () => {
  it("should set value", () => {
    let vo = new StubValueObject("string teste");
    expect(vo.value).toBe("string teste");

    vo = new StubValueObject({ time_futebol: "São Paulo Futebol Clube" });
    expect(vo.value).toStrictEqual({ time_futebol: "São Paulo Futebol Clube" });
  });

  it("should convert to string", () => {
    const date = new Date();

    let arrange: any = [
      //{ received: null, expected: { _value: null } },
      //{ received: undefined, expected: { _value: undefined } },
      { received: "", expected: { _value: "" } },
      { received: "jesus", expected: { _value: "jesus" } },
      { received: 0, expected: { _value: 0 } },
      { received: 1, expected: { _value: 1 } },
      { received: -2, expected: { _value: -2 } },
      { received: true, expected: { _value: true } },
      { received: false, expected: { _value: false } },
      { received: date, expected: { _value: date } },
      {
        received: { objeto: "leonardo" },
        expected: { _value: { objeto: "leonardo" } },
      },
    ];

    arrange.forEach((value: { received: any; expected: any }) => {
      let vo = new StubValueObject(value.received);
      expect(vo).toEqual(value.expected);
    });
  });

  it("should be a immutable object", () => {
    const obj = {
      prop1: "value1",
      deep: { prop2: "value2", prop3: new Date() },
    };

    const vo = new StubValueObject(obj);

    expect(() => {
      (vo as any).value.prop1 = "aqui da erro";
    }).toThrow(
      "Cannot assign to read only property 'prop1' of object '#<Object>"
    );

    expect(() => {
      (vo as any).value.deep.prop2 = "aqui da erro";
    }).toThrow(
      "Cannot assign to read only property 'prop2' of object '#<Object>"
    );

    expect(vo.value.deep.prop3).toBeInstanceOf(Date);
  });
});
