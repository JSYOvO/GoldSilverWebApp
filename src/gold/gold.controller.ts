import { Controller, Get, Param } from '@nestjs/common';
import { GoldService } from './gold.service';

@Controller('gold')
export class GoldController {
  constructor(private readonly goldService: GoldService) {}

  @Get('/')
  public getAll() {
    return this.goldService.getGold();
  }

  @Get('/:ago')
  public getGold(@Param('ago') ago: number) {
    return this.goldService.getGold();
  }

  @Get('/exchange')
  public getExchangeRate() {
    return this.goldService.getExchangeRate();
  }
}
