import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      <a routerLink="/taxes" routerLinkActive="active">Taxes</a>
    </nav>
    <button (click)="clearLocalStorage()">Clear all products/taxes</button>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    a {
      padding: 5px;
      text-decoration: none;
      color: black;
      margin: 0 10px;
    }
    .active {
      border-bottom: 2px solid black;
    }
  `]
})
export class AppComponent {
  title = 'Grocery Store Back Office';

  clearLocalStorage() {
    localStorage.removeItem('taxes');
    localStorage.removeItem('products');
    location.reload();
  }
}
