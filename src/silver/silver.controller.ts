import { Controller, Get, Param } from '@nestjs/common';
import { SilverService } from './Silver.service';

@Controller('Silver')
export class SilverController {
  constructor(private readonly SilverService: SilverService) {}

  @Get('/')
  public getAll() {
    return this.SilverService.getSilver();
  }

  @Get('/:ago')
  public getSilver(@Param('ago') ago: number) {
    return this.SilverService.getSilver();
  }

  @Get('/exchange')
  public getExchangeRate() {
    return this.SilverService.getExchangeRate();
  }
}
