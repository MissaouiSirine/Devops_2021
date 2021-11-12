import { Controller, Get, Param } from "@nestjs/common";
import { FatorielService } from "./fatoriel.service";

@Controller('factoriel')
export class FactorielController {


  constructor(
    private fatorielService :FatorielService,
  ) {
  }

  @Get(':id')
  getfact(@Param('id') id: number): number {
    return this.fatorielService.factorial(id);
  }
}
