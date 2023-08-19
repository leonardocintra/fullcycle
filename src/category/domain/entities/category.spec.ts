import { Category } from "./category"

describe('Category Unit Tests', () => {
  test('constructor of category tests', () => {
    const props = {
      name: 'Terror',
      description: 'Medo extremo',
      is_active: true,
      created_at: new Date(),
    }

    const category: Category = new Category(props)


    expect(category.name).toBe('Terror')
    expect(category.description).toBe('Medo extremo')
    expect(category.is_active).toBeTruthy()
    expect(category.created_at).toBe(props.created_at)
  })
})