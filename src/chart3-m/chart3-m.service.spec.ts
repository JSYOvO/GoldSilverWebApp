import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MService } from './chart3-m.service';

describe('Chart3MService', () => {
  let service: Chart3MService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Chart3MService],
    }).compile();

    service = module.get<Chart3MService>(Chart3MService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
