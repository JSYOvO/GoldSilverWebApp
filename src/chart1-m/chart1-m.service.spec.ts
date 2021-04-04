import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MService } from './chart1-m.service';

describe('Chart1MService', () => {
  let service: Chart1MService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart1MService],
    }).compile();

    service = module.get<Chart1MService>(Chart1MService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
