import { Controller, Get, Param } from '@nestjs/common';
import { SilverService } from './silver.service';

@Controller('silver')
export class SilverController {
  constructor(private readonly silverService: SilverService) {}

  @Get('/')
  public getAll() {
    return this.silverService.getPrice(0);
  }

  @Get('/:ago')
  public getGold(@Param('ago') ago: number) {
    return this.silverService.getPrice(ago);
  }
}
