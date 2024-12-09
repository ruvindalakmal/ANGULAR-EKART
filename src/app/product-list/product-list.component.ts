import { Component } from '@angular/core';
import {SearchComponent} from './search/search.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [
    SearchComponent,
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  listOfStrings : string[] = ['Mark' , 'Steve' , 'Merry' , 'John' , 'Sarah'];
}
