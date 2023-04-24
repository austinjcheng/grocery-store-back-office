import { Component, EventEmitter, Output, OnInit } from '@angular/core';

export interface Tax {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
  taxName: string = '';
  taxPercentage: number = 0;
  taxes: Tax[] = [];

  @Output() taxAdded = new EventEmitter<Tax>();

  ngOnInit() {
    const taxesFromLocalStorage = localStorage.getItem('taxes');
    this.taxes = [
        { name: 'GST', percentage: 0.18 },
        { name: 'VAT', percentage: 0.05 },
        { name: 'Sales Tax', percentage: 0.1 }
    ];
    if(taxesFromLocalStorage) {
      const parsedTaxes = JSON.parse(taxesFromLocalStorage) as Tax[];
      this.taxes = this.taxes.concat(parsedTaxes);
    }
  }

  isTaxFormValid(): boolean {
    return this.taxName.trim() !== '' && this.taxPercentage >= 0 && this.taxPercentage <= 100;
  }

  addTax() {
    const newTax: Tax = {
      name: this.taxName,
      percentage: this.taxPercentage / 100
    };
    this.taxes.push(newTax);
    this.taxAdded.emit(newTax); // emit the newly added tax
    this.saveTaxesToLocalStorage(); // save taxes to local storage
    this.taxName = '';
    this.taxPercentage = 0;
  }

  removeTax(tax: Tax) {
    const index = this.taxes.indexOf(tax);
    if (index > -1) {
      this.taxes.splice(index, 1);
      this.saveTaxesToLocalStorage();
    }
  }

  // Method that saves taxes to local storage
  saveTaxesToLocalStorage() {
    localStorage.setItem('taxes', JSON.stringify(this.taxes));
  }
}
