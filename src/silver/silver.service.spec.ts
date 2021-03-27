import { Test, TestingModule } from '@nestjs/testing';
import { SilverService } from './silver.service';

describe('SilverService', () => {
  let service: SilverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SilverService],
    }).compile();

    service = module.get<SilverService>(SilverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
