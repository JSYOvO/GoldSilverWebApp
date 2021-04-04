import { Controller, Get, Param } from '@nestjs/common';
import { Chart5DSilverService } from './chart5DSilver.service';

@Controller('chart/5d')
export class Chart5DSilverController {
  constructor(private readonly chartService: Chart5DSilverService) {}

  @Get('/Silver')
  public getSilverChart() {
    return this.chartService.getSilverChart();
  }
}
