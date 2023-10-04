import ValidationError from "../errors/validation-error";
import ValidatorRules from "./validators-rules";

type Values = {
  value: any,
  property: string
}

type ExpectedRule = {
  value: any
  property: string;
  rule: keyof ValidatorRules;
  error: ValidationError;
  params?: any[]
}

function assertIsInvalid({ value, property, rule, error, params = [] }: ExpectedRule): void {
  expect(() => {
    const validator = ValidatorRules.values(value, property);
    const method = validator[rule];
    method.apply(validator, params); // #Verificar aula #F1386
  }).toThrow(error);
}

function assertIsValid({ value, property, rule, error, params = [] }: ExpectedRule) {
  expect(() => {
    const validator = ValidatorRules.values(value, property);
    const method = validator[rule];
    method.apply(validator, params);
  }).not.toThrow(error);
}


describe("ValidatorRules Unit Tests", () => {
  test("values method", () => {
    const validator = ValidatorRules.values("some value", "field");
    expect(validator).toBeInstanceOf(ValidatorRules);
    expect(validator["value"]).toBe("some value");
    expect(validator["property"]).toBe("field");
  });

  test("required validation rules", function () {
    const arrangeInvalid: Values[] = [
      { value: null, property: "field", },
      { value: undefined, property: "field", },
      { value: "", property: "field", },
    ];

    arrangeInvalid.forEach((element) => {
      assertIsInvalid({
        value: element.value,
        property: element.property,
        rule: "required",
        error: new ValidationError('The field is required')
      })
    });

    const arrangeValid = [
      { value: "ronaldo", property: "field", },
      { value: 5, property: "field", },
      { value: 0, property: "field", },
      { value: false, property: "field", },
      { value: -100, property: "field" },
    ];

    arrangeValid.forEach((element) => {
      assertIsValid({
        value: element.value,
        property: element.property,
        rule: "required",
        error: new ValidationError('The field is required')
      })
    });
  });

  test("string validation rules", function () {
    const messageError = "The field must be a string";
    const arrangeInValid = [
      { value: 1, property: "field", },
      { value: false, property: "field", },
      { value: {}, property: "field", },
    ];

    arrangeInValid.forEach((element) => {
      assertIsInvalid({
        value: element.value,
        property: element.property,
        rule: "string",
        error: new ValidationError(messageError)
      })
    });

    const arrangeValid = [
      { value: 'Ronaldo', property: "field", },
    ];

    arrangeValid.forEach((element) => {
      assertIsValid({
        value: element.value,
        property: element.property,
        rule: "string",
        error: new ValidationError(messageError)
      })
    });



  });

  test("max length validation rules", function () {
    const messageError = "The field must be less or equal to 2 characters";
    const arrangeInvalid: Values[] = [
      { value: "São Paulo", property: "field", },
    ];

    arrangeInvalid.forEach((element) => {
      assertIsInvalid({
        value: element.value,
        property: element.property,
        rule: "maxLength",
        error: new ValidationError(messageError),
        params: [2]
      })
    });

    const arrangeValid = [
      { value: "ronaldo", property: "field", },
    ];

    arrangeValid.forEach((element) => {
      assertIsValid({
        value: element.value,
        property: element.property,
        rule: "maxLength",
        error: new ValidationError(messageError),
        params: [12]
      })
    });
  });
});