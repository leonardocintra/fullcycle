import { deepFreeze } from "./objects";

describe("object Unit Test", () => {
  it("should not freeze a scalar value", () => {
    const objString = deepFreeze("ronaldo");
    expect(objString).toBe("ronaldo");

    const objBoolean = deepFreeze(true);
    expect(typeof objBoolean).toBe("boolean");

    const objNumber = deepFreeze(1);
    expect(typeof objNumber).toBe("number");
  });

  it("should be a immutable object", () => {
    const obj = deepFreeze({
      prop1: "value1",
      deep: { prop2: "value2", prop3: new Date() },
    });

    expect(() => {
      (obj as any).prop1 = "aqui da erro";
    }).toThrow(
      "Cannot assign to read only property 'prop1' of object '#<Object>"
    );

    expect(() => {
      (obj as any).deep.prop2 = "aqui da erro";
    }).toThrow(
      "Cannot assign to read only property 'prop2' of object '#<Object>"
    );

    expect(obj.deep.prop3).toBeInstanceOf(Date);
  });
});
