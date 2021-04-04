import { Test, TestingModule } from '@nestjs/testing';
import { Chart1MGoldController } from './chart1MGold.controller';

describe('Chart1MController', () => {
  let controller: Chart1MGoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart1MGoldController],
    }).compile();

    controller = module.get<Chart1MGoldController>(Chart1MGoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
