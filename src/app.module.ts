import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoldModule } from './gold/gold.module';
import { SilverModule } from './silver/silver.module';
import { Chart1YModule } from './chart1Y/chart1Y.module';
import { Chart5DModule } from './chart5D/chart5D.module';
import { Chart1MModule } from './chart1-m/chart1-m.module';
import { Chart3MModule } from './chart3-m/chart3-m.module';

@Module({
  imports: [GoldModule, SilverModule, Chart1YModule, Chart5DModule, Chart1MModule, Chart3MModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
