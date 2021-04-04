import { HttpModule, Module } from '@nestjs/common';
import { Chart1MController } from './chart1-m.controller';
import { Chart1MService } from './chart1-m.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1mo', region: 'US' },
      headers: {
        'x-rapidapi-key': 'f86b58d97dmsh9af5f5eb2318f1ap1a6aafjsnbbcb7769bd85',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [Chart1MController],
  providers: [Chart1MService],
})
export class Chart1MModule {}
