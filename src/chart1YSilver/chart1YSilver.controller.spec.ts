import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YSilverController } from './chart1YSilver.controller';

describe('Chart1YSilverController', () => {
  let controller: Chart1YSilverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1YSilverController],
    }).compile();

    controller = module.get<Chart1YSilverController>(Chart1YSilverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
