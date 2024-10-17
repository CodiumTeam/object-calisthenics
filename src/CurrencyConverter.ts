export class CurrencyConverter {
  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    if (fromCurrency == "EUR" && toCurrency == "USD") {
      return Math.round(amount * 1.1329 * 100) / 100;
    }
    if (fromCurrency == "EUR" && toCurrency == "JPY") {
      return Math.round(amount * 128.121);
    }

    return amount;
  }
}
