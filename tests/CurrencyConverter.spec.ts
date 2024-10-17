import { CurrencyConverter } from '../src/CurrencyConverter'

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

})
