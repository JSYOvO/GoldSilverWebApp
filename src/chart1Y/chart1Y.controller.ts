import { Controller, Get, Param } from '@nestjs/common';
import { Chart1YService } from './chart1Y.service';

@Controller('chart/1y')
export class Chart1YController {
  constructor(private readonly chartService: Chart1YService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
