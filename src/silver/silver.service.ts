import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class SilverService {
  constructor(private httpService: HttpService) {}
  public async getSilver(dateInfo: string) {
    const ENDURL_SILVER = `https://www.goldapi.io/api/XAG/USD/` + dateInfo;

    const SILVER_INFO = this.httpService
      .get(ENDURL_SILVER)
      .pipe(map((response) => response.data));

    return SILVER_INFO;
  }
}
