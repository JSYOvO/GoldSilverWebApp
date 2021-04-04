import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DGoldController } from './chart5DGold.controller';

describe('Chart5DController', () => {
  let controller: Chart5DGoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart5DGoldController],
    }).compile();

    controller = module.get<Chart5DGoldController>(Chart5DGoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
