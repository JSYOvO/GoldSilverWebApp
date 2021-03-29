import { Controller, Get, Param } from '@nestjs/common';
import { ChartService } from './chart.service';

@Controller('chart')
export class ChartController {
  constructor(private readonly chartService: ChartService) {}

  @Get('/gold/:period')
  public getGoldChart(@Param('period') period: string) {
    return this.chartService.getGoldChart();
  }
}
