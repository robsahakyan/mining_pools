import axios from 'axios';
import { MiningPool, MiningPoolDetails } from '../../types/mining-pools';
import backendUrl from 'src/configs/backendUrl';

export const miningPoolsApi = {
  getAllMiningPools: async (): Promise<MiningPool[]> => {
    const response = await axios.get(`${backendUrl}/mining-pools`);

    return response.data;
  },

  getMiningPoolById: async (id: string): Promise<MiningPoolDetails> => {
    const response = await axios.get(`${backendUrl}/mining-pools/${id}`);
    
    return response.data;
  },
}; 