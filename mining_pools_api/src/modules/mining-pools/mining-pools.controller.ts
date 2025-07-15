import { Controller, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MiningPoolsService } from './mining-pools.service';
import { MiningPoolDto } from './dtoes/mining-pool.dto';
import { MiningPoolDetailsDto } from './dtoes/mining-pool-details.dto';

@Controller('mining-pools')
@ApiTags('mining-pools')
export class MiningPoolsController {
  constructor(private readonly miningPoolsService: MiningPoolsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all mining pools' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successfully retrieved all mining pools',
    type: [MiningPoolDto] 
  })
  async getAllMiningPools(): Promise<MiningPoolDto[]> {
    return this.miningPoolsService.getAllMiningPools();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get mining pool details by ID' })
  @ApiParam({ name: 'id', description: 'Mining pool ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Successfully retrieved mining pool details',
    type: MiningPoolDetailsDto 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Mining pool not found' 
  })
  async getMiningPoolById(@Param('id') id: string): Promise<MiningPoolDetailsDto> {
    return this.miningPoolsService.getMiningPoolById(id);
  }
} 