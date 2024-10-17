import {CurrencyConverter} from '../src/CurrencyConverter'

describe('Currency Converter', () => {

  test.each([
    [10,],
    [20,],
  ])('convert Euros to Euros return the same amount', (amount) => {
    const currencyConverter = new CurrencyConverter()
    expect(currencyConverter.convert(amount, "EUR", "EUR")).toBe(amount)
  })

  test.each([
    [10, 11.33],
  ])('convert Euros to Dollars', (amount, expectedChange) => {
    const currencyConverter = new CurrencyConverter()
    expect(currencyConverter.convert(amount, "EUR", "USD")).toBe(expectedChange)
  })

  test.each([
    [10, 1281],
  ])('convert Euros to Yens', (amount, expectedChange) => {
    const currencyConverter = new CurrencyConverter()
    expect(currencyConverter.convert(amount, "EUR", "JPY")).toBe(expectedChange)
  })

  test.each([
    [1281, 11.33],
  ])('convert Yens to Dollars', (amount, expectedChange) => {
    const currencyConverter = new CurrencyConverter()
    expect(currencyConverter.convert(amount, "JPY", "USD")).toBe(expectedChange)
  });
})
