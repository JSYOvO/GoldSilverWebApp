import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YGoldController } from './chart1YGold.controller';

describe('Chart1YGoldController', () => {
  let controller: Chart1YGoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1YGoldController],
    }).compile();

    controller = module.get<Chart1YGoldController>(Chart1YGoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
