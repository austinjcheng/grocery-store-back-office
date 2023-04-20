import { Tax } from './tax.model';

export class Product {
  constructor(
    public name: string,
    public price: number,
    public taxes: Tax[] = []
  ) {}
}
