import { HttpModule, Module } from '@nestjs/common';
import { SilverService } from './silver.service';
import { SilverController } from './silver.controller';

@Module({
  imports: [
    HttpModule.register({
      params: { symbol: 'SI=F', region: 'US' },
      headers: {
        'x-rapidapi-key': '9a6b5934d9mshc9cf480c9838d45p1d8635jsn4c648a49c63e',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }),
  ],
  providers: [SilverService],
  controllers: [SilverController],
})
export class SilverModule {}
