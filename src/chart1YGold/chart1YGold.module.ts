import { HttpModule, Module } from '@nestjs/common';
import { Chart1YGoldService } from './chart1YGold.service';
import { Chart1YGoldController } from './chart1YGold.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1y', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart1YGoldService],
  controllers: [Chart1YGoldController],
})
export class Chart1YGoldModule {}
