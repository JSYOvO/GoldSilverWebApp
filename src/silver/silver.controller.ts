import { Controller, Get } from '@nestjs/common';
import { SilverService } from './silver.service';

@Controller('silver')
export class SilverController {
  constructor(private readonly silverService: SilverService) {}

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

    return this.silverService.getSilver(dateInfo);
  }

  @Get('/fromto')
  public getSilver() {}
}
