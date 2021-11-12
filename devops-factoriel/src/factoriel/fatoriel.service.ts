import { Injectable } from '@nestjs/common';

@Injectable()
export class FatorielService {
  constructor() {}

  factorial(n) {
    let result = 1;
    if (n <= 1) {
      return 1;
    } else {
      result = this.factorial(n - 1) * n;
    }
    return result;
  }
}
