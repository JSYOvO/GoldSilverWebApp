import { Test, TestingModule } from '@nestjs/testing';
import { Chart5DController } from './chart5D.controller';

describe('Chart5DController', () => {
  let controller: Chart5DController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Chart5DController],
    }).compile();

    controller = module.get<Chart5DController>(Chart5DController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
