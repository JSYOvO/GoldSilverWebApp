import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DGoldService } from './chart5DGold.service';

describe('Chart5DService', () => {
  let service: Chart5DGoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart5DGoldService],
    }).compile();

    service = module.get<Chart5DGoldService>(Chart5DGoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
