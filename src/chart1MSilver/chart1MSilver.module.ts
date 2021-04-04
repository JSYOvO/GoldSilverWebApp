import { HttpModule, Module } from '@nestjs/common';
import { Chart1MSilverController } from './chart1MSilver.controller';
import { Chart1MSilverService } from './chart1MSilver.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '1mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [Chart1MSilverController],
  providers: [Chart1MSilverService],
})
export class Chart1MSilverModule {}
