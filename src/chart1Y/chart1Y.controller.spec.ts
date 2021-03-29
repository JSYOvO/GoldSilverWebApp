import { Test, TestingModule } from '@nestjs/testing';
import { Chart1YController } from './chart1Y.controller';

describe('Chart1YController', () => {
  let controller: Chart1YController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1YController],
    }).compile();

    controller = module.get<Chart1YController>(Chart1YController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
