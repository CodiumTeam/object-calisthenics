class Amount {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }
}

enum Currency {
  USD,
  EUR,
  JPY,
}

export class CurrencyConverter {
  private readonly EUR_TO_DOLLAR = 1.1329;
  private readonly EUR_TO_JPY = 128.121;

  private convert_calisthenics(amount: Amount, fromCurrency: Currency, toCurrency: Currency) : Amount {
    if (fromCurrency == Currency.EUR && toCurrency == Currency.USD) {
      return new Amount(Math.round(amount.amount * this.EUR_TO_DOLLAR * 100) / 100);
    }
    if (fromCurrency == Currency.EUR && toCurrency == Currency.JPY) {
      return new Amount(Math.round(amount.amount * this.EUR_TO_JPY));
    }

    if (fromCurrency == Currency.JPY && toCurrency == Currency.USD) {
      return new Amount(Math.round(amount.amount * this.EUR_TO_DOLLAR / this.EUR_TO_JPY * 100) / 100);
    }

    return amount;
  }

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    return this.convert_calisthenics(
      new Amount(amount),
      Currency[fromCurrency as keyof typeof Currency],
      Currency[toCurrency as keyof typeof Currency]
    ).amount;
  }
}
