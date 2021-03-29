import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

const ENDURL =
  'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary';

@Injectable()
export class GoldService {
  constructor(private httpService: HttpService) {}

  public async getGold() {
    const GOLD_INFO = this.httpService
      .get(ENDURL)
      .pipe(map((response) => response.data));

    return GOLD_INFO;
  }

  public getExchangeRate() {
    const ENDURL = ``;

    return this.httpService.get(ENDURL).pipe(map((response) => response.data));
  }
}
