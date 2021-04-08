import { HttpModule, Module } from '@nestjs/common';
import { Chart1MGoldController } from './chart1MGold.controller';
import { Chart1MGoldService } from './chart1MGold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [Chart1MGoldController],
  providers: [Chart1MGoldService],
})
export class Chart1MGoldModule {}
