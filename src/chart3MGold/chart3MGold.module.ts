import { HttpModule, Module } from '@nestjs/common';
import { Chart3MGoldService } from './chart3MGold.service';
import { Chart3MGoldController } from './chart3MGold.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '3mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart3MGoldService],
  controllers: [Chart3MGoldController],
})
export class Chart3MGoldModule {}
