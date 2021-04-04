import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MSilverController } from './chart1MSilver.controller';

describe('Chart1MController', () => {
  let controller: Chart1MSilverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1MSilverController],
    }).compile();

    controller = module.get<Chart1MSilverController>(Chart1MSilverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
