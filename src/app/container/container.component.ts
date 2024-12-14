import { Component } from '@angular/core';
import {SearchComponent} from './search/search.component';
import {NgForOf} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [
    SearchComponent,
    NgForOf,
    ProductListComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfStrings : string[] = ['Mark' , 'Steve' , 'Merry' , 'John' , 'Sarah'];

  searchText : string = '';

  setSearchText(value : string){
  this.searchText  = value;
  }
}
