import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AIChat';
  panel:boolean = true;

  togglePanal(){
    this.panel=!this.panel;
    document.documentElement.style.setProperty('--width', this.panel?"260px":"0px");
  }
}
