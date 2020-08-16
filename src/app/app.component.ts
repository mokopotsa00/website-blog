import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './shared/animation/animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideInOutAnimation]
})
export class AppComponent implements OnInit{
  isActive = false;
  isMobileSearch = true;

  animationState = 'out';

  ngOnInit(){
    setTimeout(() => {
      (document.querySelector('.tm_preloader') as HTMLElement).classList.add("loaded");
    }, 1000)
  }
  onMenuToggle(){
    this.isActive = !this.isActive;
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
}
