import { HttpModule, Module } from '@nestjs/common';
import { GoldController } from './gold.controller';
import { GoldService } from './gold.service';

@Module({
  imports: [
    HttpModule.register({
      params: { symbol: 'GC=F', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  controllers: [GoldController],
  providers: [GoldService],
})
export class GoldModule {}
