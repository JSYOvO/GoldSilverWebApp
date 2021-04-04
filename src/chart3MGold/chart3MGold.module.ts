import { HttpModule, Module } from '@nestjs/common';
import { Chart3MGoldService } from './chart3MGold.service';
import { Chart3MGoldController } from './chart3MGold.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '3mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [Chart3MGoldService],
  controllers: [Chart3MGoldController],
})
export class Chart3MGoldModule {}
