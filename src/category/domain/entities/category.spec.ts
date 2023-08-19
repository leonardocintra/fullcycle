import { omit } from "lodash"
import { Category } from "./category"

describe('Category Unit Tests', () => {

  test('getter of name field', () => {
    const category = new Category({ name: 'Comedia' })
    expect(category.name).toBe('Comedia')
  })

  test('getter and setter of description field', () => {
    let category = new Category({ name: 'Comedia' })
    expect(category.description).toBeNull()

    category = new Category({ name: 'Comedia', description: 'rindo' })
    expect(category.name).toBe('Comedia')
    expect(category.description).toBe('rindo')

    category = new Category({ name: 'Comedia' })
    category['description'] = 'outra coisa'
    expect(category.description).toBe('outra coisa')

    category['description'] = undefined
    expect(category.description).toBeNull()

    category['description'] = null
    expect(category.description).toBeNull()
  })

  test('getter and setter of description field', () => {
    let category = new Category({ name: 'Comedia' })
    expect(category.description).toBeNull()

    category = new Category({ name: 'Comedia', description: 'rindo' })
    expect(category.name).toBe('Comedia')
    expect(category.description).toBe('rindo')

    category = new Category({ name: 'Comedia' })
    category['description'] = 'outra coisa'
    expect(category.description).toBe('outra coisa')

    category['description'] = undefined
    expect(category.description).toBeNull()

    category['description'] = null
    expect(category.description).toBeNull()
  })

  test('constructor of category tests', () => {
    let category = new Category({ name: 'Terror' })
    let props = omit(category.props, 'created_at')

    expect(props).toStrictEqual({
      name: 'Terror',
      description: null,
      is_active: true
    })
    expect(category.props.created_at).toBeInstanceOf(Date)

    let created_at = new Date()
    category = new Category({
      name: 'Romance',
      created_at
    })
    expect(category.props).toMatchObject({
      name: 'Romance',
      created_at
    })

    category = new Category({
      name: 'Romance',
      description: 'qualquer coisa',
    })
    expect(category.props).toMatchObject({
      name: 'Romance',
      description: 'qualquer coisa',
    })

    category = new Category({
      name: 'Romance',
      is_active: true,
    })
    expect(category.props).toMatchObject({
      name: 'Romance',
      is_active: true,
    })
  })
})