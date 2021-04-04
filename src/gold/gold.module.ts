import { HttpModule, Module } from '@nestjs/common';
import { GoldController } from './gold.controller';
import { GoldService } from './gold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { symbol: 'GC=F', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [GoldController],
  providers: [GoldService],
})
export class GoldModule {}
