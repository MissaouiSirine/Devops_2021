import { Test, TestingModule } from '@nestjs/testing';
import { FatorielService } from './fatoriel.service';

describe('FatorielService', () => {
  let service: FatorielService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FatorielService],
    }).compile();

    service = module.get<FatorielService>(FatorielService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
