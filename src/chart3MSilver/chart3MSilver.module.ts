import { HttpModule, Module } from '@nestjs/common';
import { Chart3MSilverService } from './chart3MSilver.service';
import { Chart3MSilverController } from './chart3MSilver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '3mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart3MSilverService],
  controllers: [Chart3MSilverController],
})
export class Chart3MSilverModule {}
