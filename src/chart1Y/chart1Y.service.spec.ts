import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YService } from './chart1Y.service';

describe('Chart1YService', () => {
  let service: Chart1YService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1YService],
    }).compile();

    service = module.get<Chart1YService>(Chart1YService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
