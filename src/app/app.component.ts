import { Component, OnInit, HostListener } from '@angular/core';
import { SlideInOutAnimation } from './shared/animation/animation'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideInOutAnimation]
})
export class AppComponent implements OnInit{
  isActive = false;
  isMobileSearch = false;
  isSearchActive = false;
  menuAnimationState = 'out';
  searchAnimationState = 'out';
  innerWidth: number;

  // @HostListener('window:resize', ['$event']) onResize(event) {
  //   this.innerWidth = +window.innerWidth;
  //   if( this.innerWidth > 1040){
  //     this.isSearchActive = true;
  //     this.searchAnimationState = "in";
  //   }
  //   else{
  //     this.isSearchActive = false;
  //     this.searchAnimationState = "out";
  //   }
  // }

  constructor( private router: Router){}
  ngOnInit(){
    this.innerWidth = +window.innerWidth;
    if( this.innerWidth > 1040){
      this.isSearchActive = true;
      this.searchAnimationState = "in";
    }
  }
  onActivate(e){
    window.scroll(0,0);
  }
  onMenuToggle(){
    this.isActive = !this.isActive;
    this.menuAnimationState = this.menuAnimationState === 'out' ? 'in' : 'out';
  }
  onSearchToggle(){
    this.isSearchActive = !this.isSearchActive;
    this.searchAnimationState = this.searchAnimationState === 'out' ? 'in' : 'out';
  }
}
