import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YGoldService } from './chart1YGold.service';

describe('Chart1YGoldService', () => {
  let service: Chart1YGoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1YGoldService],
    }).compile();

    service = module.get<Chart1YGoldService>(Chart1YGoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
