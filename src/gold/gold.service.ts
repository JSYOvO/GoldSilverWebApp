import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class GoldService {
  constructor(private httpService: HttpService) {}

  public async getGold(dateInfo: string) {
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
