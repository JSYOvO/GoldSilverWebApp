import { Controller, Get, Param } from '@nestjs/common';
import { Chart1YGoldService } from './chart1YGold.service';

@Controller('chart/1y')
export class Chart1YGoldController {
  constructor(private readonly chartService: Chart1YGoldService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
