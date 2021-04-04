import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GoldModule } from './gold/gold.module';
import { SilverModule } from './silver/silver.module';
import { Chart1YGoldModule } from './chart1YGold/chart1YGold.module';
import { Chart5DGoldModule } from './chart5DGold/chart5DGold.module';
import { Chart1MGoldModule } from './chart1MGold/chart1MGold.module';
import { Chart3MGoldModule } from './chart3MGold/chart3MGold.module';
import { Chart1MSilverModule } from './chart1MSilver/chart1MSilver.module';
import { Chart1YSilverModule } from './chart1YSilver/chart1YSilver.module';
import { Chart5DSilverModule } from './chart5DSilver/chart5DSilver.module';
import { Chart3MSilverModule } from './chart3MSilver/chart3MSilver.module';

@Module({
  imports: [
    GoldModule,
    SilverModule,
    Chart1YGoldModule,
    Chart5DGoldModule,
    Chart1MGoldModule,
    Chart3MGoldModule,
    Chart1MSilverModule,
    Chart1YSilverModule,
    Chart5DSilverModule,
    Chart3MSilverModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
