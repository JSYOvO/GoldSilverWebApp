import { HttpModule, Module } from '@nestjs/common';
import { Chart1MGoldController } from './chart1MGold.controller';
import { Chart1MGoldService } from './chart1MGold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '1d', symbol: 'GC=F', range: '1mo', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [Chart1MGoldController],
  providers: [Chart1MGoldService],
})
export class Chart1MGoldModule {}
