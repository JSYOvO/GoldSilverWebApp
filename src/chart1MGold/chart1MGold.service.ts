import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

const ENDURL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart`;

@Injectable()
export class Chart1MGoldService {
  constructor(private httpService: HttpService) {}

  public async getGoldChart() {
    const now = new Date();

    const CHART_INFO = this.httpService
      .get(ENDURL)
      .pipe(map((response) => response.data));

    return CHART_INFO;
  }
}
