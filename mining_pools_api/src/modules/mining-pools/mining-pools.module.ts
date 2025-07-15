import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MiningPoolsController } from './mining-pools.controller';
import { MiningPoolsService } from './mining-pools.service';
import { MiningPool, MiningPoolSchema } from './mining-pool.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MiningPool.name, schema: MiningPoolSchema }]),
  ],
  controllers: [MiningPoolsController],
  providers: [MiningPoolsService],
  exports: [MiningPoolsService],
})
export class MiningPoolsModule {} 