import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DService } from './chart5D.service';

describe('Chart5DService', () => {
  let service: Chart5DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart5DService],
    }).compile();

    service = module.get<Chart5DService>(Chart5DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
