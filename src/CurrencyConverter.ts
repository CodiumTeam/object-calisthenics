class Amount {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    round(decimals: number): Amount {
        return new Amount(Math.round(this.amount * 10 ** decimals) / 10 ** decimals);
    }

    multiply(number: number): Amount {
        return new Amount(this.amount * number);
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

    private convert_calisthenics(money: Money, toCurrency: Currency): Money {
        if (money.currency == Currency.EUR && toCurrency == Currency.USD) {
            return new Money(money.amount.multiply(this.EUR_TO_DOLLAR).round(2), Currency.USD);
        }
        if (money.currency == Currency.EUR && toCurrency == Currency.JPY) {
            return new Money(money.amount.multiply(this.EUR_TO_JPY).round(0), Currency.JPY);
        }

        if (money.currency == Currency.JPY && toCurrency == Currency.USD) {
            return new Money(money.amount.multiply(this.EUR_TO_DOLLAR / this.EUR_TO_JPY).round(2), Currency.USD);
        }

        return money;
    }

    convert(amount: number, fromCurrency: string, toCurrency: string): number {
        return this.convert_calisthenics(
            new Money(new Amount(amount),
                Currency[fromCurrency as keyof typeof Currency]),
            Currency[toCurrency as keyof typeof Currency]
        ).amount.amount;
    }
}
