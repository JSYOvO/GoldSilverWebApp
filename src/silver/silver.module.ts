import { HttpModule, Module } from '@nestjs/common';
import { SilverService } from './silver.service';
import { SilverController } from './silver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { symbol: 'SI=F', region: 'US' },
      headers: {
        'x-rapidapi-key': '4688bc0cbcmsh0dae82a4c1f4f8bp1cd9cejsn93cf24c70534',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [SilverService],
  controllers: [SilverController],
})
export class SilverModule {}
