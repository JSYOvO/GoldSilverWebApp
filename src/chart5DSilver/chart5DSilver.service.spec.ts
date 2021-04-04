import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DSilverService } from './chart5DSilver.service';

describe('Chart5DService', () => {
  let service: Chart5DSilverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart5DSilverService],
    }).compile();

    service = module.get<Chart5DSilverService>(Chart5DSilverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
