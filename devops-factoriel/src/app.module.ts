import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactorielModule } from './factoriel/factoriel.module';

@Module({
  imports: [FactorielModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
