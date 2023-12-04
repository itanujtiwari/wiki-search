import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term : string = '';
  @Output() emitter = new EventEmitter<string>();

  onFormSubmit(event : any){
    event.preventDefault();
    // console.log(this.term);
    this.emitter.emit(this.term);

  }


}
