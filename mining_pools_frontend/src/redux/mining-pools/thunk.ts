import { createAsyncThunk } from '@reduxjs/toolkit';
import { miningPoolsApi } from '../api/miningPoolsApi';

export const fetchMiningPoolsThunk = createAsyncThunk(
  'miningPools/fetchMiningPools',
  async () => {
    const pools = await miningPoolsApi.getAllMiningPools();

    return pools;
  }
);

export const fetchMiningPoolDetailsThunk = createAsyncThunk(
  'miningPools/fetchMiningPoolDetails',
  async (id: string) => {
    const poolDetails = await miningPoolsApi.getMiningPoolById(id);

    return poolDetails;
  }
); 