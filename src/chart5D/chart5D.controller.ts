import { Controller, Get, Param } from '@nestjs/common';
import { Chart5DService } from './chart5D.service';

@Controller('chart/5d')
export class Chart5DController {
  constructor(private readonly chartService: Chart5DService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
