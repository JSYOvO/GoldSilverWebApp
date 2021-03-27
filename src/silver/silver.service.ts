import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class SilverService {
  constructor(private httpService: HttpService) {}
  public async getPrice(dateAgo: number) {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate = now.getDate() - dateAgo;
    const dateInfo =
      nowYear.toString() +
      (nowMonth < 10 ? '0' + nowMonth : nowMonth) +
      (nowDate < 10 ? '0' + nowDate : nowDate);

    const ENDURL_SILVER = `https://www.goldapi.io/api/XAG/USD/` + dateInfo;

    const SILVER_INFO = this.httpService
      .get(ENDURL_SILVER)
      .pipe(map((response) => response.data));

    return SILVER_INFO;
  }
}
