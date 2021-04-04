import { Controller, Get } from '@nestjs/common';
import { Chart3MSilverService } from './chart3MSilver.service';

@Controller('chart/3m')
export class Chart3MSilverController {
  constructor(private readonly chartService: Chart3MSilverService) {}

  @Get('/Silver')
  public getSilverChart() {
    return this.chartService.getSilverChart();
  }
}
