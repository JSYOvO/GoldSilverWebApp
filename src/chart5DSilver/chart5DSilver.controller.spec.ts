import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DSilverController } from './chart5DSilver.controller';

describe('Chart5DController', () => {
  let controller: Chart5DSilverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart5DSilverController],
    }).compile();

    controller = module.get<Chart5DSilverController>(Chart5DSilverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
