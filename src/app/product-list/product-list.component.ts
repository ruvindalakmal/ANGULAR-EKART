import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name = 'John Doe';
  addToCart : number = 0;
  product = {
    name  : 'IPhone 12Pro',
    price  : 1199,
    color  : 'Gold',
    discount  : 10,
    inStock : 10,
    pImage : 'assets/iphone_12pro.jpg'
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
  // onNameChange(event : any){
  //    this.name = event.target.value;
  // }
  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
}
