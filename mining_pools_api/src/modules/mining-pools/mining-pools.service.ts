import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MiningPool, MiningPoolDocument } from './mining-pool.schema';
import { MiningPoolDto } from './dtoes/mining-pool.dto';
import { MiningPoolDetailsDto } from './dtoes/mining-pool-details.dto';

@Injectable()
export class MiningPoolsService {
  constructor(
    @InjectModel(MiningPool.name) private miningPoolModel: Model<MiningPoolDocument>,
  ) {
    this.initializeMockData();
  }

  private async initializeMockData() {
    const count = await this.miningPoolModel.countDocuments();
    if (count === 0) {
      const mockData: MiningPoolDetailsDto[] = [
        {
          id: 'pool-1',
          name: 'US East Pool',
          hashrateTHs: 830.5,
          activeWorkers: 1240,
          rejectRate: 0.012,
          status: 'online',
          last24hRevenueBTC: 0.035,
          uptimePercent: 99.82,
          location: 'Ashburn, VA',
          feePercent: 1.0,
        },
        {
          id: 'pool-2',
          name: 'EU Central Pool',
          hashrateTHs: 460.3,
          activeWorkers: 876,
          rejectRate: 0.045,
          status: 'degraded',
          last24hRevenueBTC: 0.022,
          uptimePercent: 97.45,
          location: 'Frankfurt, Germany',
          feePercent: 1.5,
        },
        {
          id: 'pool-3',
          name: 'Asia Pacific Pool',
          hashrateTHs: 1234.7,
          activeWorkers: 1890,
          rejectRate: 0.008,
          status: 'online',
          last24hRevenueBTC: 0.058,
          uptimePercent: 99.95,
          location: 'Singapore',
          feePercent: 0.75,
        },
        {
          id: 'pool-4',
          name: 'Canada West Pool',
          hashrateTHs: 210.8,
          activeWorkers: 345,
          rejectRate: 0.098,
          status: 'offline',
          last24hRevenueBTC: 0.0,
          uptimePercent: 15.23,
          location: 'Vancouver, BC',
          feePercent: 2.0,
        },
        {
          id: 'pool-5',
          name: 'Nordic Pool',
          hashrateTHs: 678.9,
          activeWorkers: 1156,
          rejectRate: 0.023,
          status: 'online',
          last24hRevenueBTC: 0.031,
          uptimePercent: 98.76,
          location: 'Stockholm, Sweden',
          feePercent: 1.25,
        },
      ];

      await this.miningPoolModel.insertMany(mockData);
    }
  }

  async getAllMiningPools(): Promise<MiningPoolDto[]> {
    const pools = await this.miningPoolModel.find().exec();
    
    return pools.map(pool => ({
      id: pool.id,
      name: pool.name,
      hashrateTHs: pool.hashrateTHs,
      activeWorkers: pool.activeWorkers,
      rejectRate: pool.rejectRate,
      status: pool.status,
    }));
  }

  async getMiningPoolById(id: string): Promise<MiningPoolDetailsDto> {
    const pool = await this.miningPoolModel.findOne({ id }).exec();
    if (!pool) {
      throw new NotFoundException(`Mining pool with id ${id} not found`);
    }

    return {
      id: pool.id,
      name: pool.name,
      hashrateTHs: pool.hashrateTHs,
      activeWorkers: pool.activeWorkers,
      rejectRate: pool.rejectRate,
      status: pool.status,
      last24hRevenueBTC: pool.last24hRevenueBTC,
      uptimePercent: pool.uptimePercent,
      location: pool.location,
      feePercent: pool.feePercent,
    };
  }
} 