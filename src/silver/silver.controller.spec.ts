import { Test, TestingModule } from '@nestjs/testing';
import { SilverController } from './silver.controller';

describe('SilverController', () => {
  let controller: SilverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SilverController],
    }).compile();

    controller = module.get<SilverController>(SilverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
