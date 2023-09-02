import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { FormPrescording, Offer } from '../../../../Module-3/utils/Interface';
import ApplicationServices from '../../Api/ApplicationService';


interface CardSliceState {
  isLoading: boolean;
  selectedOffer: boolean;
  error: string;
}

const initialState: CardSliceState = {
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

export const prescoringSlice = createSlice({
  name: 'postPrescoring',
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
        const offers = action.payload.sort((a: Offer, b: Offer) => (a.totalAmount - b.totalAmount));
        localStorage.setItem('offers', JSON.stringify(offers));
      });
  },
});

export default prescoringSlice.reducer;
