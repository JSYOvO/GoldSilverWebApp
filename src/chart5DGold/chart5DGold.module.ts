import { HttpModule, Module } from '@nestjs/common';
import { Chart5DGoldService } from './chart5DGold.service';
import { Chart5DGoldController } from './chart5DGold.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'SI=F', range: '5d', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart5DGoldService],
  controllers: [Chart5DGoldController],
})
export class Chart5DGoldModule {}
