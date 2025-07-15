export interface MiningPool {
  id: string;
  name: string;
  hashrateTHs: number;
  activeWorkers: number;
  rejectRate: number;
  status: 'online' | 'degraded' | 'offline';
}

export interface MiningPoolDetails extends MiningPool {
  last24hRevenueBTC: number;
  uptimePercent: number;
  location: string;
  feePercent: number;
}

export interface MiningPoolsState {
  pools: MiningPool[];
  selectedPool: MiningPoolDetails | null;
  loading: boolean;
  error: string | null;
} 