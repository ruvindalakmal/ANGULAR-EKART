import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = '';

  updateSearchText(event : any){
    this.searchText = event.target.value;
  }
}
