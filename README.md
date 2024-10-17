# DDD_and_calisthenics
Examples with calisthenics implementations

# Currency conversion
Convert an amount from one currency to another.

# Examples
When I want to convert 10 EUR into EUR by rounding to cents,
I get 10 EUR.

Knowing that the exchange rate of EUR to USD is 1.1329,
When I want to convert 10 EUR into USD by rounding to cents,
I get 11.33 USD.

Knowing that the exchange rate of EUR to JPY is 128.121,
When I want to convert 1281 JPY into USD by rounding up to unit,
I get 11.33 USD.

#Refactoring recipes

## Extract a Value Type

1. Extract method from primitive value
2. Move to a new target class
3. Convert from static to non-static
4. Extract primitive value as field initialized in constructor
5. In constructor, extract parameter for the value