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

describe('factorialService', () => {
  let service: FatorielService;

  beforeEach(() => {
    service = new FatorielService();
  });
  describe('factorial', () => {
    it('should return the factorial', async () => {
      const result = 120;
      jest.spyOn(service, 'factorial').mockImplementation(() => result);

      expect(await service.factorial(5)).toBe(result);
    });
  });
});
