import { HttpModule, Module } from '@nestjs/common';
import { Chart1MSilverController } from './chart1MSilver.controller';
import { Chart1MSilverService } from './chart1MSilver.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '1mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [Chart1MSilverController],
  providers: [Chart1MSilverService],
})
export class Chart1MSilverModule {}
