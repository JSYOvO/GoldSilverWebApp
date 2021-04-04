import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YSilverService } from './chart1YSilver.service';

describe('Chart1YSilverService', () => {
  let service: Chart1YSilverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1YSilverService],
    }).compile();

    service = module.get<Chart1YSilverService>(Chart1YSilverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
