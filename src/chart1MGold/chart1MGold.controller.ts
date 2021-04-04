import { Controller, Get } from '@nestjs/common';
import { Chart1MGoldService } from './chart1MGold.service';

@Controller('chart/1m')
export class Chart1MGoldController {
  constructor(private readonly chartService: Chart1MGoldService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
