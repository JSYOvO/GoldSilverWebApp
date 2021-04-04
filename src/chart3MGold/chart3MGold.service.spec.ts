import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MGoldService } from './chart3MGold.service';

describe('Chart3MGoldService', () => {
  let service: Chart3MGoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart3MGoldService],
    }).compile();

    service = module.get<Chart3MGoldService>(Chart3MGoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
