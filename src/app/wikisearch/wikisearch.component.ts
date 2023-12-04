import { Component } from '@angular/core';
import { PediaService } from '../pedia.service';

@Component({
  selector: 'app-wikisearch',
  templateUrl: './wikisearch.component.html',
  styleUrls: ['./wikisearch.component.css']
})
export class WikisearchComponent {
  pages : any = '';

  constructor(private ps : PediaService) {}

  onEmit(event : string){
    console.log(event);

    this.ps.getData(event).subscribe(res => {
      console.log(res);

      this.pages = res;
      this.pages = this.pages.query.search;
      console.log(this.pages);
    })
  }
}
