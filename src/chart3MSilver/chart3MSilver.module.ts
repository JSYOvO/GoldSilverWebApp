import { HttpModule, Module } from '@nestjs/common';
import { Chart3MSilverService } from './chart3MSilver.service';
import { Chart3MSilverController } from './chart3MSilver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '3mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart3MSilverService],
  controllers: [Chart3MSilverController],
})
export class Chart3MSilverModule {}
