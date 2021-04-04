import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MSilverService } from './chart3MSilver.service';

describe('Chart3MSilverService', () => {
  let service: Chart3MSilverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart3MSilverService],
    }).compile();

    service = module.get<Chart3MSilverService>(Chart3MSilverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
