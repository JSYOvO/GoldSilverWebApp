import { HttpModule, Module } from '@nestjs/common';
import { Chart5DSilverService } from './chart5DSilver.service';
import { Chart5DSilverController } from './chart5DSilver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '5d', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart5DSilverService],
  controllers: [Chart5DSilverController],
})
export class Chart5DSilverModule {}
