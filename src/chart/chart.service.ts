import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ChartService {
  constructor(private httpService: HttpService) {}

  public async getChart(dateAgo: number) {
    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDay = now.getDay();
    if (nowDay == 0) dateAgo += 2;
    if (nowDay == 6) dateAgo += 1;
    const nowDate = now.getDate() - dateAgo;

    const dateInfo =
      nowYear.toString() +
      (nowMonth < 10 ? '0' + nowMonth : nowMonth) +
      (nowDate < 10 ? '0' + nowDate : nowDate);

    // const ENDURL_GOLD = `https://www.goldapi.io/api/XAU/USD/` + dateInfo;
    const ENDURL_GOLD = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart`;

    const GOLD_INFO = this.httpService
      .get(ENDURL_GOLD)
      .pipe(map((response) => response.data));

    return GOLD_INFO;
  }
}
