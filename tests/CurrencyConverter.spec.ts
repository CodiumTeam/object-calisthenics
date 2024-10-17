import { CurrencyConverter } from '../src/CurrencyConverter'

describe('Currency Converter', () => {
  it('convert Euros to Euros return the same amount', () => {
    const currencyConverter = new CurrencyConverter()

    expect(currencyConverter.convert(10, "EUR", "EUR")).toBe(10)
  })
})
