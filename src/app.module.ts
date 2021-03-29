import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoldModule } from './gold/gold.module';
import { SilverModule } from './silver/silver.module';
import { ChartModule } from './chart/chart.module';

@Module({
  imports: [GoldModule, SilverModule, ChartModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
