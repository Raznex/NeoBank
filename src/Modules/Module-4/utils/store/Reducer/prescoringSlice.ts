import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { FormPrescording, IPostScoring, Offer, Payment } from '../../../../Module-3/utils/Interface';
import ApplicationServices from '../../Api/ApplicationService';
import { AppStatus, SortValue } from '../../Options/Enum';


interface CardSliceState {
  isFirstStepClose: boolean;
  isSecondStepClose: boolean;
  isLoading: boolean;
  selectedOffer: boolean;
  error: string;
  isAscending: boolean;
  monthlyPaymentsSortColumn: SortValue;
  monthlyPayments: Payment[];
  status: AppStatus;
}

const initialState: CardSliceState = {
  isFirstStepClose: false,
  isSecondStepClose: false,
  isLoading: false,
  selectedOffer: false,
  isAscending: false,
  monthlyPaymentsSortColumn: SortValue.NUMBER,
  error: '',
  monthlyPayments: [],
  status: AppStatus.PREAPPROVAL,
};


export const postPrescoringStepOne = createAsyncThunk(
  'prescoringSlice/postPrescoringStepOne',
  async (data: FormPrescording) => {
    const { postPrescoringStep1 } = ApplicationServices();
    const response = await postPrescoringStep1(data);
    return response;
  },
);

export const postSelectedOffer = createAsyncThunk(
  'prescoringSlice/postSelectedOffer',
  async (data: Offer) => {
    const { postChooseOffer } = ApplicationServices();
    const response = await postChooseOffer(data);
    return response;
  },
);

export const postScoringData = createAsyncThunk(
  'prescoringSlice/postScoringData',
  async ({ data, applicationId }: IPostScoring) => {
    const { postScoringStep2 } = ApplicationServices();
    const response = await postScoringStep2(data, applicationId);
    return response;
  },
);

export const getStatusOffer = createAsyncThunk(
  'prescoringSlice/getStatusOffer',
  async (applicationId: string) => {
    const { getOfferStatus } = ApplicationServices();
    const response = await getOfferStatus(applicationId);
    return response;
  },
);

const checkSortValue = (sortValue: SortValue) => {
  if (sortValue === SortValue.NUMBER
    || sortValue === SortValue.TOTAL_PAYMENT
    || sortValue === SortValue.DEBT_PAYMENY
    || sortValue === SortValue.INTEREST_PAYMENT
    || sortValue === SortValue.REMAINING_DEBT) {
    return true;
  }
  return false;
};

export const prescoringSlice = createSlice({
  name: 'postP',
  initialState,
  reducers: {
    monthlyPaymentsIncSort: (state, action) => {
      const sortValue: SortValue = action.payload;
      const isAscending = state.monthlyPaymentsSortColumn === sortValue ? !state.isAscending : true; // Флаг направления сортировки

      if (checkSortValue(sortValue)) {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => {
          const aValue = Number(a[sortValue]);
          const bValue = Number(b[sortValue]);
          return isAscending ? aValue - bValue : bValue - aValue;
        });
      } else {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => a.date.localeCompare(b.date));
        if (!isAscending) {
          state.monthlyPayments.reverse();
        }
      }

      // Обновляем состояние для отслеживания текущего столбца сортировки и направления
      state.monthlyPaymentsSortColumn = sortValue;
      state.isAscending = isAscending;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postPrescoringStepOne.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postPrescoringStepOne.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFirstStepClose = true;
        const offers = action.payload.sort((a: Offer, b: Offer) => (a.totalAmount - b.totalAmount));
        localStorage.setItem('offers', JSON.stringify(offers));
      })
      .addCase(postSelectedOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSelectedOffer.fulfilled, (state) => {
        state.isLoading = false;
        state.selectedOffer = true;
      })
      .addCase(postScoringData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postScoringData.fulfilled, (state) => {
        state.isLoading = false;
        state.isSecondStepClose = true;
      })
      .addCase(getStatusOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStatusOffer.fulfilled, (state, action) => {
        if (action.payload.status !== AppStatus.PREAPPROVAL) state.selectedOffer = true;
        if (action.payload.status === AppStatus.CC_DENIED) {
          state.selectedOffer = false;
          localStorage.removeItem('offers');
          state.isFirstStepClose = false;
          state.isSecondStepClose = false;
        }
        const monthlyPayments = action.payload.credit?.paymentSchedule;
        if (monthlyPayments) state.monthlyPayments = monthlyPayments;
        console.log(monthlyPayments);
        state.status = action.payload.status;
        state.isLoading = false;
      });
  },
});

const { actions, reducer } = prescoringSlice;
export default reducer;

export const {
  monthlyPaymentsIncSort,
} = actions;
