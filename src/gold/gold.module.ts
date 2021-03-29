import { HttpModule, Module } from '@nestjs/common';
import { GoldController } from './gold.controller';
import { GoldService } from './gold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { interval: '5m', symbol: 'AMRN', range: '1d', region: 'US' },
      headers: {
        'x-access-token': 'goldapi-aonch1ukhkmdng8-io',
        'Content-Type': 'application/json',
      },
    }),
  ],
  controllers: [GoldController],
  providers: [GoldService],
})
export class GoldModule {}
