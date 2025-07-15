import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';
import { MiningPoolDto } from './mining-pool.dto';

export class MiningPoolDetailsDto extends MiningPoolDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  last24hRevenueBTC: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  uptimePercent: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  feePercent: number;
} 