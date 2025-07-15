import { createSlice } from '@reduxjs/toolkit';
import { MiningPoolsState } from '../../types/mining-pools';
import { fetchMiningPoolsThunk, fetchMiningPoolDetailsThunk } from './thunk';

const initialState: MiningPoolsState = {
  pools: [],
  selectedPool: null,
  loading: false,
  error: null,
};

const miningPoolsSlice = createSlice({
  name: 'miningPools',
  initialState,
  reducers: {
    clearSelectedPool: (state) => {
      state.selectedPool = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiningPoolsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMiningPoolsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.pools = action.payload;
      })
      .addCase(fetchMiningPoolsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch mining pools';
      })
      .addCase(fetchMiningPoolDetailsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMiningPoolDetailsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPool = action.payload;
      })
      .addCase(fetchMiningPoolDetailsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch mining pool details';
      });
  },
});

export const { clearSelectedPool } = miningPoolsSlice.actions;
export { miningPoolsSlice }; 