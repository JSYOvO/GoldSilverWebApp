import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MController } from './chart1-m.controller';

describe('Chart1MController', () => {
  let controller: Chart1MController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1MController],
    }).compile();

    controller = module.get<Chart1MController>(Chart1MController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
