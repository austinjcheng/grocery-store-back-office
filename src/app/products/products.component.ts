import { Component, Input, OnInit } from '@angular/core';
import { Tax } from '../taxes/taxes.component';

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
export class ProductsComponent implements OnInit {
  productName: string = '';
  productPrice: number = 0;
  selectedTaxes: Tax[] = [];
  taxes: Tax[] = [];
  products: Product[] = [];

  ngOnInit() {
    // Load taxes from local storage or set default taxes
    const storedTaxes = localStorage.getItem('taxes');
    this.taxes = storedTaxes ? JSON.parse(storedTaxes) : [
      { name: 'GST', percentage: 0.18 },
      { name: 'VAT', percentage: 0.05 },
      { name: 'Sales Tax', percentage: 0.1 }
    ];

    // Load products from local storage or set default products
    const storedProducts = localStorage.getItem('products');
    this.products = storedProducts ? JSON.parse(storedProducts) : [
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
  }

  addProduct() {
    const newProduct: Product = {
      name: this.productName,
      price: this.productPrice,
      taxes: this.selectedTaxes
    };
    this.products.push(newProduct);
    this.saveProductsToLocalStorage();
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
    this.saveProductsToLocalStorage();
    this.productName = '';
    this.productPrice = 0;
    this.selectedTaxes = [];
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.saveProductsToLocalStorage();
    }
    this.productName = '';
    this.productPrice = 0;
    this.selectedTaxes = [];
  }

  addTax(tax: Tax) {
    this.taxes.push(tax);
    this.saveTaxesToLocalStorage();
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

  // Method that saves products to local storage
  saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
