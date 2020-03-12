import { Product } from './product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [

      new Product(
        'NICEHAT',
        'A nice Black hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),

      new Product(
        'MYSHOES',
        'Black running shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running shoes'],
        109.99
      ),

      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      )
    ]
  }


  productSelected(product: Product): void {
    console.log(`Product: ${product.name} was selected`);
  }
}
