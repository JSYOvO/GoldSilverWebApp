import { Controller, Get, Param } from '@nestjs/common';
import { Chart1YSilverService } from './chart1YSilver.service';

@Controller('chart/1y')
export class Chart1YSilverController {
  constructor(private readonly chartService: Chart1YSilverService) {}

  @Get('/Silver')
  public getSilverChart() {
    return this.chartService.getSilverChart();
  }
}
