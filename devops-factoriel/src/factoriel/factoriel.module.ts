import { Module } from '@nestjs/common';
import { FactorielController } from './factoriel.controller';
import { FatorielService } from './fatoriel.service';

@Module({
  controllers: [FactorielController],
  providers: [FatorielService]
})
export class FactorielModule {}
