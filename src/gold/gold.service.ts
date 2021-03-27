import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class GoldService {
  constructor(private httpService: HttpService) {}

  public async getGold(dateAgo: number) {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate() - dateAgo;
    const dateInfo =
      nowYear.toString() +
      (nowMonth < 10 ? '0' + nowMonth : nowMonth) +
      (nowDate < 10 ? '0' + nowDate : nowDate);

    const ENDURL_GOLD = `https://www.goldapi.io/api/XAU/USD/` + dateInfo;

    const GOLD_INFO = this.httpService
      .get(ENDURL_GOLD)
      .pipe(map((response) => response.data));

    return GOLD_INFO;
  }

  public getExchangeRate() {
    const ENDURL = ``;

    return this.httpService.get(ENDURL).pipe(map((response) => response.data));
  }
}
