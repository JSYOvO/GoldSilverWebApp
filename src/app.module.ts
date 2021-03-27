import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoldModule } from './gold/gold.module';
import { SilverModule } from './silver/silver.module';

@Module({
  imports: [GoldModule, SilverModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}