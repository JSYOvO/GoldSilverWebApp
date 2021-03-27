import { HttpModule, Module } from '@nestjs/common';
import { SilverService } from './silver.service';
import { SilverController } from './silver.controller';

@Module({
  imports: [
    HttpModule.register({
      headers: {
        'x-access-token': 'goldapi-aonch1ukhkmdng8-io',
        'Content-Type': 'application/json',
      },
    }),
  ],
  providers: [SilverService],
  controllers: [SilverController],
})
export class SilverModule {}
