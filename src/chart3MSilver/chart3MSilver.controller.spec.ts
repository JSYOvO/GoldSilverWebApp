import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MSilverController } from './chart3MSilver.controller';

describe('Chart3MSilverController', () => {
  let controller: Chart3MSilverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart3MSilverController],
    }).compile();

    controller = module.get<Chart3MSilverController>(Chart3MSilverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
