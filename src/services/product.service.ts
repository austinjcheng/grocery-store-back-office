import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Tax } from '../models/tax.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product('Apple', 0.5),
    new Product('Orange', 0.8),
    new Product('Banana', 0.3, [new Tax('VAT', 0.12)])
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(index: number, product: Product) {
    this.products[index] = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
