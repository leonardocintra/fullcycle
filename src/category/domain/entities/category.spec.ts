import { omit } from "lodash"
import { Category } from "./category"
import { validate as uuidValidate } from 'uuid'

describe('Category Unit Tests', () => {

  test('getter of name field', () => {
    const category = new Category({ name: 'Comedia' })
    expect(category.name).toBe('Comedia')
  })

  // #F1359 - continuar aqui

  test('test id field', () => {
    const data = [
      { props: { name: 'Comedia' } },
      { props: { name: 'Comedia' }, id: null },
      { props: { name: 'Comedia' }, id: undefined },
      { props: { name: 'Comedia' }, id: '8a3cf287-82f8-4180-b3b4-0e8640b13f45' },
    ]

    data.forEach(i => {
      const category = new Category(i.props, i.id)
      expect(category.id).not.toBeNull()
      expect(uuidValidate(category.id)).toBeTruthy()
    });
  })


  test('getter and setter of created_at field', () => {
    let category = new Category({ name: 'Comedia' })
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date();
    category = new Category({ name: 'Comedia', created_at })
    expect(category.created_at).toBe(created_at)
  })


  test('getter and setter of is_active field', () => {
    let category = new Category({ name: 'Comedia' })
    expect(category.is_active).toBeTruthy()

    category = new Category({ name: 'Comedia', is_active: true })
    expect(category.is_active).toBeTruthy()

    category = new Category({ name: 'Comedia', is_active: false })
    expect(category.is_active).toBeFalsy()
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