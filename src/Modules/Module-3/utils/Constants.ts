export const currencyPairs = [
  {from: "USD", to: "RUB"},
  {from: "EUR", to: "RUB"},
  {from: "SGD", to: "RUB"},
  {from: "JPY", to: "RUB"},
  {from: "CAD", to: "RUB"},
  {from: "NZD", to: "RUB"},
];

export const currencyElements = document.querySelectorAll('.rate__currency_span');
const intervalMinutes = 15;
export const intervalMilliseconds = intervalMinutes * 60 * 1000;
