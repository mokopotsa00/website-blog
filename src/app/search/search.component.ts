import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // @Input() isMobileSearch: boolean;
  constructor() { }

  ngOnInit(): void {
    // console.log("mobali data");
    // console.log(this.isMobileSearch);
  }

}
