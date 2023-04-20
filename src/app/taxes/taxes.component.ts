import { Component, EventEmitter, Output } from '@angular/core';

export interface Tax {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent {
  taxName: string = '';
  taxPercentage: number = 0;
  taxes: Tax[] = [
    { name: 'GST', percentage: 0.18 },
    { name: 'VAT', percentage: 0.05 },
    { name: 'Sales Tax', percentage: 0.1 }
  ];
  @Output() taxAdded = new EventEmitter<Tax>();

  addTax() {
    const newTax: Tax = {
      name: this.taxName,
      percentage: this.taxPercentage
    };
    this.taxes.push(newTax);
    this.taxAdded.emit(newTax); // emit the newly added tax
    this.taxName = '';
    this.taxPercentage = 0;
  }
}
