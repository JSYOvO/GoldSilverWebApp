import { HttpModule, Module } from '@nestjs/common';
import { GoldController } from './gold.controller';
import { GoldService } from './gold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { symbol: 'GC=F', region: 'US' },
      headers: {
        'x-rapidapi-key': 'f86b58d97dmsh9af5f5eb2318f1ap1a6aafjsnbbcb7769bd85',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [GoldController],
  providers: [GoldService],
})
export class GoldModule {}
