export class CurrencyConverter {
  private readonly EUR_TO_DOLAR = 1.1329;
  private readonly EUR_TO_JPY = 128.121;

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    if (fromCurrency == "EUR" && toCurrency == "USD") {
      return Math.round(amount * this.EUR_TO_DOLAR * 100) / 100;
    }
    if (fromCurrency == "EUR" && toCurrency == "JPY") {
      return Math.round(amount * this.EUR_TO_JPY);
    }

    if (fromCurrency == "JPY" && toCurrency == "USD") {
      return Math.round(amount * this.EUR_TO_DOLAR / this.EUR_TO_JPY * 100) / 100;
    }

    return amount;
  }
}
