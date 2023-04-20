import { Injectable } from '@angular/core';
import { Tax } from '../models/tax.model';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private taxes: Tax[] = [];

  constructor() {}

  getTaxes(): Tax[] {
    return this.taxes;
  }

  addTax(name: string, percentage: number) {
    const newTax = new Tax(name, percentage);
    this.taxes.push(newTax);
  }

  updateTax(tax: Tax) {
    const index = this.taxes.findIndex(t => t === tax);
    if (index !== -1) {
      this.taxes[index] = tax;
    }
  }

  deleteTax(tax: Tax) {
    const index = this.taxes.findIndex(t => t === tax);
    if (index !== -1) {
      this.taxes.splice(index, 1);
    }
  }
}
