import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-authprovider',
  templateUrl: './authprovider.component.html',
  styleUrls: ['./authprovider.component.scss']
})
export class AuthproviderComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  public signinForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  }); 
  

  signin(formData: FormData){
    this.authService.AdminLogin(formData["email"], formData["password"]);
  }

  ngOnInit() {
  }

}
