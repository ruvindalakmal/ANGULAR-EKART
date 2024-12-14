import {Component, EventEmitter, Output} from '@angular/core';
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

  //1.Create an Event
  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){

  }


  updateSearchText(inputEL : HTMLInputElement){
    // this.searchText = event.target.value;
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
