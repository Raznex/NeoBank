export interface FormPrescording {
  amount: number;
  term: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  birthdate: Date;
  passportSeries: string;
  passportNumber: string;
}

export interface CurrencyData {
  value: string;
  currency: string;
}

export interface NewsCards {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
  publishedAt: string;
}

export interface Pair {
  from: string;
  to: string;
}

export interface ExchangeResult {
  value: string[];
}
export interface ScoringForm {
  gender: 'MALE' | 'FEMALE';
  maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
  dependentAmount: number;
  passportIssueDate: string | Date;
  passportIssueBranch: string;
  employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
  employerINN: string;
  salary: number;
  position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

export interface IPostScoring {
  data: ScoringForm;
  applicationId: string;
}

export interface Payment {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

export interface Offer {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
}
