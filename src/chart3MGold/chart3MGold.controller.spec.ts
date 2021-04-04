import { Test, TestingModule } from '@nestjs/testing';
import { Chart3MGoldController } from './chart3MGold.controller';

describe('Chart3MGoldController', () => {
  let controller: Chart3MGoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart3MGoldController],
    }).compile();

    controller = module.get<Chart3MGoldController>(Chart3MGoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
