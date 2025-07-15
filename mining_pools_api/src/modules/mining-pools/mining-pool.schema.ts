import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MiningPoolDocument = MiningPool & Document;

@Schema({ timestamps: true })
export class MiningPool extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  hashrateTHs: number;

  @Prop({ required: true })
  activeWorkers: number;

  @Prop({ required: true })
  rejectRate: number;

  @Prop({ required: true, enum: ['online', 'degraded', 'offline'] })
  status: string;

  @Prop({ required: true })
  last24hRevenueBTC: number;

  @Prop({ required: true })
  uptimePercent: number;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  feePercent: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const MiningPoolSchema = SchemaFactory.createForClass(MiningPool); 