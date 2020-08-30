import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './shared/animation/animation'
import { Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideInOutAnimation]
})
export class AppComponent implements OnInit{
  isActive = false;
  isSearchActive = false;
  menuAnimationState = 'out';
  searchAnimationState = 'out';
  innerWidth: number;
  searchForm: FormGroup;

  constructor( private router: Router){}
  ngOnInit(){
    this.innerWidth = +window.innerWidth;
    //check for screen width
    if( this.innerWidth > 1040){
      this.isSearchActive = true;
      this.searchAnimationState = "in";
    }

    this.searchForm = new FormGroup({ 'searchText': new FormControl(null) });
  }
  //scroll to top
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

  onSubmit(){
    console.log("submited");
    console.log( this.searchForm);
  }
}
