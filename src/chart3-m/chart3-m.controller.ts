import { Controller, Get } from '@nestjs/common';
import { Chart3MService } from './chart3-m.service';

@Controller('chart/3m')
export class Chart3MController {
  constructor(private readonly chartService: Chart3MService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
