import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name  : 'IPhone 12Pro',
    price  : 1199,
    color  : 'Gold',
    discount  : 10,
    inStock : 0,
    pImage : 'assets/iphone_12pro.jpg'
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
}
