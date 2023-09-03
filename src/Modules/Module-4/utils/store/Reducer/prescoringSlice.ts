import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { FormPrescording, Offer } from '../../../../Module-3/utils/Interface';
import ApplicationServices from '../../Api/ApplicationService';


interface CardSliceState {
  isFirstStepClose: boolean;
  isLoading: boolean;
  selectedOffer: boolean;
  error: string;
}

const initialState: CardSliceState = {
  isFirstStepClose: false,
  isLoading: false,
  selectedOffer: false,
  error: '',
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
        localStorage.setItem('offerTakes', JSON.stringify('Выбран оффер'));
      });
  },
});

const { reducer } = prescoringSlice;
export default reducer;
