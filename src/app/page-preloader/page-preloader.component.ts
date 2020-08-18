import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-preloader',
  templateUrl: './page-preloader.component.html',
  styleUrls: ['./page-preloader.component.scss']
})
export class PagePreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      (document.querySelector('.tm_preloader') as HTMLElement).classList.add("loaded");
    }, 100)
  }

}
