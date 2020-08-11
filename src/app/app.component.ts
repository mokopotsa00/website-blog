import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isActive = false;

  onMenuToggle(){
    this.isActive = !this.isActive;
    if( this.isActive){
      (document.querySelector('.tm_mobile_menu_wrap') as HTMLElement).style.display = 'block';
    }
    else{
      (document.querySelector('.tm_mobile_menu_wrap') as HTMLElement).style.display = 'none';
    }
  }
}
