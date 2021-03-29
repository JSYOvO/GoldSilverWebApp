import { HttpModule, Module } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartController } from './chart.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1y', region: 'US' },
      headers: {
        'x-rapidapi-key': 'f86b58d97dmsh9af5f5eb2318f1ap1a6aafjsnbbcb7769bd85',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [ChartService],
  controllers: [ChartController],
})
export class ChartModule {}
