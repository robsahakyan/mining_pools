import { IsNotEmpty, IsString, IsNumber, IsEnum, Min, Max } from 'class-validator';

export class MiningPoolDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  hashrateTHs: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  activeWorkers: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  rejectRate: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(['online', 'degraded', 'offline'])
  status: string;
} 