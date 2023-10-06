import ValidationError from "../errors/validation-error";
import ValidatorRules from "./validators-rules";

// Testes estão na #F1386 #F1387 #F1388

describe("ValidatorRules Unit Tests", () => {
  test('values methods', () => {
    const validator = ValidatorRules.values('some value', 'field');
    expect(validator).toBeInstanceOf(ValidatorRules)
    expect(validator['value']).toBe('some value')
    expect(validator['property']).toBe('field')
  })

  test('requied validation rule (invalid)', () => {

    const messageError = 'The field is required';
    const arrange = [
      { value: null, property: 'field' },
      { value: undefined, property: 'field' },
      { value: '', property: 'field' },
    ]

    arrange.forEach((item) => {
      expect(() => ValidatorRules.values(item.value, item.property).required()).toThrow(new ValidationError(messageError))
    })
  })

  test('requied validation rule (valid)', () => {

    const messageError = 'The field is required';
    const arrange = [
      { value: 5, property: 'field' },
      { value: 0, property: 'field' },
      { value: false, property: 'field' },
    ]

    arrange.forEach((item) => {
      expect(() => ValidatorRules.values(item.value, item.property).required()).not.toThrow(new ValidationError(messageError))
    })
  })

  test('string validation rule (invalid)', () => {

    const messageError = 'The field must be a string';
    const arrange = [
      { value: 3, property: 'field' },
      { value: new Date(), property: 'field' },
    ]

    arrange.forEach((item) => {
      expect(() => ValidatorRules.values(item.value, item.property).string()).toThrow(new ValidationError(messageError))
    })
  })

  test('string validation rule (valid)', () => {

    const messageError = 'The field must be a string';
    const arrange = [
      { value: '3', property: 'field' },
      { value: new Date().toString(), property: 'field' },
    ]

    arrange.forEach((item) => {
      expect(() => ValidatorRules.values(item.value, item.property).string()).not.toThrow(new ValidationError(messageError))
    })
  })

  it('should throw a validation error when combine two or more validation rules', () => {
    let validator = ValidatorRules.values(null, 'field');
    expect(() => validator.required().string()).toThrow()

    validator = ValidatorRules.values(5, 'field');
    expect(() => validator.required().string()).toThrow('The field must be a string')

    validator = ValidatorRules.values(null, 'field');
    expect(() => validator.required().boolean()).toThrow('The field is required')

    validator = ValidatorRules.values(5, 'field');
    expect(() => validator.required().boolean()).toThrow('The field must be a boolean')
  })
});