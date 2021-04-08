import { HttpModule, Module } from '@nestjs/common';
import { Chart1YSilverService } from './chart1YSilver.service';
import { Chart1YSilverController } from './chart1YSilver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '1y', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart1YSilverService],
  controllers: [Chart1YSilverController],
})
export class Chart1YSilverModule {}
