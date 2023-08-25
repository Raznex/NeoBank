interface FormPrescording {
  "amount": "number",
  "term": "number",
  "firstName": "string",
  "lastName": "string",
  "middleName": "string | null",
  "email": "string",
  "birthdate": "string | Date",
  "passportSeries": "string",
  "passportNumber": "string"
}

interface NewsCard {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
}

interface Pair {
  from: string;
  to: string;
}

interface ExchangeResult {
  value: string[];
}

export type { FormPrescording, NewsCard, Pair, ExchangeResult };
