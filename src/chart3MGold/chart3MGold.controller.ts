import { Controller, Get } from '@nestjs/common';
import { Chart3MGoldService } from './chart3MGold.service';

@Controller('chart/3m')
export class Chart3MGoldController {
  constructor(private readonly chartService: Chart3MGoldService) {}

  @Get('/gold')
  public getGoldChart() {
    return this.chartService.getGoldChart();
  }
}
