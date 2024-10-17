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

class Money {
  constructor(public amount: Amount, public currency: Currency) {
  }
}

export class CurrencyConverter {
  private readonly EUR_TO_DOLLAR = 1.1329;
  private readonly EUR_TO_JPY = 128.121;

  private convert_calisthenics(money: Money, toCurrency: Currency) : Amount {
    if (money.currency == Currency.EUR && toCurrency == Currency.USD) {
      return new Amount(Math.round(new Amount(money.amount.amount * this.EUR_TO_DOLLAR).amount * 100) / 100);
    }
    if (money.currency == Currency.EUR && toCurrency == Currency.JPY) {
      return new Amount(Math.round(new Amount(money.amount.amount * this.EUR_TO_JPY).amount));
    }

    if (money.currency == Currency.JPY && toCurrency == Currency.USD) {
      return new Amount(Math.round(new Amount(money.amount.amount * this.EUR_TO_DOLLAR / this.EUR_TO_JPY).amount * 100) / 100);
    }

    return money.amount;
  }

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    return this.convert_calisthenics(
      new Money(new Amount(amount),
      Currency[fromCurrency as keyof typeof Currency]),
      Currency[toCurrency as keyof typeof Currency]
    ).amount;
  }
}
