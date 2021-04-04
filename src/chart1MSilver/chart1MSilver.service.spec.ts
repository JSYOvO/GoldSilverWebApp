import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MSilverService } from './chart1MSilver.service';

describe('Chart1MSilverService', () => {
  let service: Chart1MSilverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1MSilverService],
    }).compile();

    service = module.get<Chart1MSilverService>(Chart1MSilverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
