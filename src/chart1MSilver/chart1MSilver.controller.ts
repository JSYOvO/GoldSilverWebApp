import { Controller, Get } from '@nestjs/common';
import { Chart1MSilverService } from './chart1MSilver.service';

@Controller('chart/1m')
export class Chart1MSilverController {
  constructor(private readonly chartService: Chart1MSilverService) {}

  @Get('/Silver')
  public getSilverChart() {
    return this.chartService.getSilverChart();
  }
}
