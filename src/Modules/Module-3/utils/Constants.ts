export const currencyPairs = [
  { from: 'USD', to: 'RUB' },
  { from: 'EUR', to: 'RUB' },
  { from: 'SGD', to: 'RUB' },
  { from: 'JPY', to: 'RUB' },
  { from: 'CAD', to: 'RUB' },
  { from: 'NZD', to: 'RUB' },
];

export const termConst = [
  { value: 6, text: '6 month' }, { value: 12, text: '12 month' }, { value: 18, text: '18 month' }, { value: 24, text: '24 month' },
];

export const genderConst = [
  { value: '', text: '' },
  { value: 'MALE', text: 'Male' },
  { value: 'FEMALE', text: 'Female' },
];

export const materialConst = [
  { value: '', text: ' ' },
  { value: 'MARRIED', text: 'Married' },
  { value: 'DIVORCED', text: 'Discovered' },
  { value: 'SINGLE', text: 'Single' },
  { value: 'WIDOW_WIDOWER', text: 'Widow Widower' },
];

export const employmentConst = [
  { value: 'UNEMPLOYED', text: '' },
  { value: 'UNEMPLOYED', text: 'Unemployed' },
  { value: 'SELF_EMPLOYED', text: 'Self Employed' },
  { value: 'EMPLOYED', text: 'Employed' },
  { value: 'BUSINESS_OWNER', text: 'Bussiness_owner' },
];

export const dependentConst = [
  { value: '', text: '' },
  { value: 0, text: '0' },
  { value: 1, text: '1' },
  { value: 2, text: '2' },
  { value: 3, text: '3' },
];

export const positionConst = [
  { value: '', text: '' },
  { value: 'WORKER', text: 'Worker' },
  { value: 'MID_MANAGER', text: 'Mid manager' },
  { value: 'TOP_MANAGER', text: 'Top manager' },
  { value: 'OWNER', text: 'Owner' },
];

const intervalMinutes = 15;
export const intervalMilliseconds = intervalMinutes * 60 * 1000;

export const cardReceivingQuestions = [
  {
    question: 'How to get card?',
    answer: 'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg 1-2 working days. For other regions of the Russian Federation 2-5 working days.',
  },
  {
    question: 'What documents are needed and how old should one be to get a card?',
    answer: 'Need a passport. You must be between 20 and 70 years old.',
  },
  {
    question: 'In what currency can I issue a card?',
    answer: 'In rubles, dollars or euro',
  },

  {
    question: 'How much income do I need to get a credit card?',
    answer: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.',
  },

  {
    question: 'How do I find out about the bank\'s decision on my application?',
    answer: 'After registration, you will receive an e-mail with a decision on your application.',
  },
];

export const cardCreditQuestions = [
  {
    question: 'What is an interest free credit card?',
    answer: 'A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.',
  },
  {
    question: 'How to activate a credit card',
    answer: 'You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.',
  },
  {
    question: 'What is a settlement date?',
    answer: 'The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.',
  },

  {
    question: 'What do I need to know about interest rates?',
    answer: 'For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.',
  },
];
