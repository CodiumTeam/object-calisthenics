class Amount {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }
}

export class CurrencyConverter {
  private readonly EUR_TO_DOLLAR = 1.1329;
  private readonly EUR_TO_JPY = 128.121;

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    return this.convert_calisthenics(new Amount(amount), fromCurrency, toCurrency).amount;
  }

  private convert_calisthenics(amount: Amount, fromCurrency: string, toCurrency: string) : Amount {
    if (fromCurrency == "EUR" && toCurrency == "USD") {
      return new Amount(Math.round(amount.amount * this.EUR_TO_DOLLAR * 100) / 100);
    }
    if (fromCurrency == "EUR" && toCurrency == "JPY") {
      return new Amount(Math.round(amount.amount * this.EUR_TO_JPY));
    }

    if (fromCurrency == "JPY" && toCurrency == "USD") {
      return new Amount(Math.round(amount.amount * this.EUR_TO_DOLLAR / this.EUR_TO_JPY * 100) / 100);
    }

    return amount;
  }
}
