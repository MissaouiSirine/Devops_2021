import { Test, TestingModule } from '@nestjs/testing';
import { FactorielController } from './factoriel.controller';

describe('FactorielController', () => {
  let controller: FactorielController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorielController],
    }).compile();

    controller = module.get<FactorielController>(FactorielController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
