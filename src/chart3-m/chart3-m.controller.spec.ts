import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MController } from './chart3-m.controller';

describe('Chart3MController', () => {
  let controller: Chart3MController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart3MController],
    }).compile();

    controller = module.get<Chart3MController>(Chart3MController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
