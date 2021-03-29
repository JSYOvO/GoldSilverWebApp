import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoldModule } from './gold/gold.module';
import { SilverModule } from './silver/silver.module';
import { Chart1YModule } from './chart1Y/chart1Y.module';
import { Chart5DModule } from './chart5D/chart5D.module';

@Module({
  imports: [GoldModule, SilverModule, Chart1YModule, Chart5DModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
