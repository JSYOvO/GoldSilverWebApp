import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MGoldService } from './chart1MGold.service';

describe('Chart1MGoldService', () => {
  let service: Chart1MGoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1MGoldService],
    }).compile();

    service = module.get<Chart1MGoldService>(Chart1MGoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
