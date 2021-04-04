import { Controller, Get } from '@nestjs/common';
import { Chart1MService } from './chart1-m.service';

@Controller('chart/1m')
export class Chart1MController {
  constructor(private readonly chartService: Chart1MService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
