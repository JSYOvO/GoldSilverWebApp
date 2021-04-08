import { HttpModule, Module } from '@nestjs/common';
import { Chart1YGoldService } from './chart1YGold.service';
import { Chart1YGoldController } from './chart1YGold.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1y', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart1YGoldService],
  controllers: [Chart1YGoldController],
})
export class Chart1YGoldModule {}
