import { HttpModule, Module } from '@nestjs/common';
import { Chart5DService } from './chart5D.service';
import { Chart5DController } from './chart5D.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '5d', region: 'US' },
      headers: {
        'x-rapidapi-key': 'f86b58d97dmsh9af5f5eb2318f1ap1a6aafjsnbbcb7769bd85',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart5DService],
  controllers: [Chart5DController],
})
export class Chart5DModule {}
