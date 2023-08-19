import { Category } from "./category"

describe('Category Unit Tests', () => {
  test('constructor of category tests', () => {
    const category: Category = new Category('Terror')
    expect(category.name).toBe('Terror')
  })
})