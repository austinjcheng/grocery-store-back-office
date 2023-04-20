import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { TaxesComponent } from '../taxes/taxes.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, TaxesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product', () => {
    const initialProductsLength = component.products.length;
    component.productName = 'Test Product';
    component.productPrice = 100;
    component.selectedTaxes = [component.taxes[0]];
    component.addProduct();
    expect(component.products.length).toBe(initialProductsLength + 1);
    const addedProduct = component.products[initialProductsLength];
    expect(addedProduct.name).toBe('Test Product');
    expect(addedProduct.price).toBe(100);
    expect(addedProduct.taxes).toEqual([component.taxes[0]]);
  });

  it('should edit a product', () => {
    const product = component.products[0];
    component.editProduct(product);
    expect(component.productName).toBe(product.name);
    expect(component.productPrice).toBe(product.price);
    expect(component.selectedTaxes).toEqual(product.taxes);
  });

  it('should update a product', () => {
    const product = component.products[0];
    component.productName = 'Updated Product';
    component.productPrice = 200;
    component.selectedTaxes = [component.taxes[1]];
    component.updateProduct(product);
    expect(product.name).toBe('Updated Product');
    expect(product.price).toBe(200);
    expect(product.taxes).toEqual([component.taxes[1]]);
  });

  it('should delete a product', () => {
    const product = component.products[0];
    const initialProductsLength = component.products.length;
    component.deleteProduct(product);
    expect(component.products.length).toBe(initialProductsLength - 1);
    expect(component.products.includes(product)).toBe(false);
  });

  it('should add a tax', () => {
    const initialSelectedTaxesLength = component.selectedTaxes.length;
    const tax = component.taxes[2];
    component.addTax(tax);
    expect(component.selectedTaxes.length).toBe(initialSelectedTaxesLength + 1);
    expect(component.selectedTaxes.includes(tax)).toBe(true);
  });

  it('should remove a tax', () => {
    const tax = component.taxes[0];
    component.selectedTaxes = [tax, component.taxes[1]];
    const initialSelectedTaxesLength = component.selectedTaxes.length;
    component.removeTax(tax);
    expect(component.selectedTaxes.length).toBe(initialSelectedTaxesLength - 1);
    expect(component.selectedTaxes.includes(tax)).toBe(false);
  });
});
