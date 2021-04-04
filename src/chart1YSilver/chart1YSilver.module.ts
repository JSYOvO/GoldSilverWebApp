import { HttpModule, Module } from '@nestjs/common';
import { Chart1YSilverService } from './chart1YSilver.service';
import { Chart1YSilverController } from './chart1YSilver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '1y', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart1YSilverService],
  controllers: [Chart1YSilverController],
})
export class Chart1YSilverModule {}
