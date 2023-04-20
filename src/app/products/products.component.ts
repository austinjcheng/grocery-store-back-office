import { Component } from '@angular/core';
import { Tax, TaxesComponent } from '../taxes/taxes.component';

interface Product {
  name: string;
  price: number;
  taxes: Tax[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productName: string = '';
  productPrice: number = 0;
  selectedTaxes: Tax[] = [];

  taxes: Tax[] = [
    { name: 'GST', percentage: 0.18 },
    { name: 'VAT', percentage: 0.05 },
    { name: 'Sales Tax', percentage: 0.1 }
  ];

  products: Product[] = [
    {
      name: 'Product 1',
      price: 10,
      taxes: [this.taxes[0]]
    },
    {
      name: 'Product 2',
      price: 20,
      taxes: [this.taxes[1]]
    },
    {
      name: 'Product 3',
      price: 30,
      taxes: [this.taxes[2]]
    }
  ];

  addProduct() {
    const newProduct: Product = {
      name: this.productName,
      price: this.productPrice,
      taxes: this.selectedTaxes
    };
    this.products.push(newProduct);
    this.productName = '';
    this.productPrice = 0;
    this.selectedTaxes = [];
  }

  editProduct(product: Product) {
    this.productName = product.name;
    this.productPrice = product.price;
    this.selectedTaxes = product.taxes;
  }

  updateProduct(product: Product) {
    product.name = this.productName;
    product.price = this.productPrice;
    product.taxes = this.selectedTaxes;
    this.productName = '';
    this.productPrice = 0;
    this.selectedTaxes = [];
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    this.productName = '';
    this.productPrice = 0;
    this.selectedTaxes = [];
  }

  addTax(tax: Tax) {
    this.selectedTaxes.push(tax);
  }

  removeTax(tax: Tax) {
    const index = this.selectedTaxes.indexOf(tax);
    if (index > -1) {
      this.selectedTaxes.splice(index, 1);
    }
  }
}
