import { Controller, Get, Param } from '@nestjs/common';
import { GoldService } from './gold.service';

@Controller('gold')
export class GoldController {
  constructor(private readonly goldService: GoldService) {}

  @Get('/')
  public getAll() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate();
    const dateInfo =
      nowYear.toString() +
      (nowMonth < 10 ? '0' + nowMonth : nowMonth) +
      (nowDate < 10 ? '0' + nowDate : nowDate);

    return this.goldService.getGold(dateInfo);
  }

  @Get('/fromto')
  public getGold() {}

  @Get('/exchange')
  public getExchangeRate() {
    return this.goldService.getExchangeRate();
  }
}
