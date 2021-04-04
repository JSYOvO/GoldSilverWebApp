import { HttpModule, Module } from '@nestjs/common';
import { Chart3MService } from './chart3-m.service';
import { Chart3MController } from './chart3-m.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '3mo', region: 'US' },
      headers: {
        'x-rapidapi-key': 'f86b58d97dmsh9af5f5eb2318f1ap1a6aafjsnbbcb7769bd85',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart3MService],
  controllers: [Chart3MController],
})
export class Chart3MModule {}
