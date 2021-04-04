import { Controller, Get, Param } from '@nestjs/common';
import { Chart5DGoldService } from './chart5DGold.service';

@Controller('chart/5d')
export class Chart5DGoldController {
  constructor(private readonly chartService: Chart5DGoldService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
