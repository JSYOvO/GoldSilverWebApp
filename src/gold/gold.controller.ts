import { Controller, Get, Param } from '@nestjs/common';
import { GoldService } from './gold.service';

@Controller('gold')
export class GoldController {
  constructor(private readonly goldService: GoldService) {}

  @Get('/')
  public getAll() {
    return this.goldService.getGold(0);
  }

  @Get('/:ago')
  public getGold(@Param('ago') ago: number) {
    return this.goldService.getGold(ago);
  }

  @Get('/exchange')
  public getExchangeRate() {
    return this.goldService.getExchangeRate();
  }
}
