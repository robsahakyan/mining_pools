import { RootState } from '../store';

export const selectMiningPoolsState = (state: RootState) => state.miningPools;
export const selectMiningPools = (state: RootState) => state.miningPools.pools;
export const selectSelectedPool = (state: RootState) => state.miningPools.selectedPool;
export const selectMiningPoolsLoading = (state: RootState) => state.miningPools.loading;
export const selectMiningPoolsError = (state: RootState) => state.miningPools.error; 