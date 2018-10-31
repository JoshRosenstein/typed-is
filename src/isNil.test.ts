import isNil from './isNil'

describe('isNil', () => {
  test('returns true for undefined and null', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
  })

  test('returns false otherwise', () => {
    expect(isNil(0)).toBeFalsy()
    expect(isNil(true)).toBeFalsy()
    expect(isNil('test')).toBeFalsy()
    expect(isNil(5)).toBeFalsy()
    expect(isNil({})).toBeFalsy()
  })
})
