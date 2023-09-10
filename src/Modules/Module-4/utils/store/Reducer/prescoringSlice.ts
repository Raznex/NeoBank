import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { FormPrescording, IPostCode, IPostScoring, Offer, Payment } from '../../../../Module-3/utils/Interface';
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

export const denyUser = createAsyncThunk(
  'prescoringSlice/denyUser',
  async (applicationId: string) => {
    const { postUserDeny } = ApplicationServices();
    const response = await postUserDeny(applicationId);
    return response;
  },
);

export const postCreateDocument = createAsyncThunk(
  'prescoringSlice/postCreateDocument',
  async (applicationId: string) => {
    const { postDocument } = ApplicationServices();
    const response = await postDocument(applicationId);
    return response;
  },
);

export const postSignUser = createAsyncThunk(
  'prescoringSlice/postSignUser',
  async (applicationId: string) => {
    const { postSign } = ApplicationServices();
    const response = await postSign(applicationId);
    return response;
  },
);

export const postCode = createAsyncThunk(
  'prescoringSlice/postCode',
  async ({ applicationId, code }: IPostCode) => {
    const { postPinCode } = ApplicationServices();
    const response = await postPinCode(applicationId, code);
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

      if (state.monthlyPaymentsSortColumn !== sortValue) {
        state.isAscending = false;
      } else {
        state.isAscending = !state.isAscending;
      }
      if (checkSortValue(sortValue)) {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => {
          const aValue = Number(a[sortValue]);
          const bValue = Number(b[sortValue]);
          return state.isAscending ? aValue - bValue : bValue - aValue;
        });
      } else {
        state.monthlyPayments = state.monthlyPayments.sort((a, b) => a.date.localeCompare(b.date));
        if (!state.isAscending) {
          state.monthlyPayments.reverse();
        }
      }
      state.monthlyPaymentsSortColumn = sortValue;
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
        state.status = action.payload.status;
        state.isLoading = false;
      })
      .addCase(denyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(denyUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSecondStepClose = false;
        state.isFirstStepClose = false;
        state.status = AppStatus.CLIENT_DENIED;
        localStorage.removeItem('offers');
      })
      .addCase(postCreateDocument.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCreateDocument.fulfilled, (state) => {
        state.status = AppStatus.DOCUMENT_CREATED;
        state.isLoading = false;
        localStorage.setItem('documentCreated', 'Документ сформирован');
      })
      .addCase(postSignUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSignUser.fulfilled, (state) => {
        state.isLoading = false;
        localStorage.setItem('documentSigning', 'Документ отправлен');
      })
      .addCase(postCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCode.fulfilled, (state) => {
        state.isLoading = false;
        state.status = AppStatus.CREDIT_ISSUED;
        localStorage.setItem('code', 'Код подтвержден');
      });
  },
});

const { actions, reducer } = prescoringSlice;
export default reducer;

export const {
  monthlyPaymentsIncSort,
} = actions;
