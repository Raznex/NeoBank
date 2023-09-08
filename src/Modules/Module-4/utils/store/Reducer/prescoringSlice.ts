import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { FormPrescording, IPostScoring, Offer } from '../../../../Module-3/utils/Interface';
import ApplicationServices from '../../Api/ApplicationService';
import { AppStatus } from '../../Options/Enum';


interface CardSliceState {
  isFirstStepClose: boolean;
  isSecondStepClose: boolean;
  isLoading: boolean;
  selectedOffer: boolean;
  error: string;
  status: AppStatus;
}

const initialState: CardSliceState = {
  isFirstStepClose: false,
  isSecondStepClose: false,
  isLoading: false,
  selectedOffer: false,
  error: '',
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

export const prescoringSlice = createSlice({
  name: 'postP',
  initialState,
  reducers: {
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
          // localStorage.removeItem('offers');
          state.isFirstStepClose = false;
          state.isSecondStepClose = false;
          state.status = AppStatus.CC_DENIED;
        }
        console.log(action.payload);
        state.status = action.payload.status;
        state.isLoading = false;
      });
  },
});

const { reducer } = prescoringSlice;
export default reducer;
