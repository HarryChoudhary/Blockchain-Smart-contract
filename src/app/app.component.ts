
import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  constructor(public authService: AuthService){
  }

  

  logout(){
    this.authService.logOut();
  }
}
