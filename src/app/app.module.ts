import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AuthService} from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from './signin/signin.component';
import { AuthproviderComponent } from './authprovider/authprovider.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailauthComponent } from './emailauth/emailauth.component';
import { PrivateComponent } from './private/private.component';
import { PasswordlessComponent } from './passwordless/passwordless.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpModule } from '@angular/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import {initIPFS,IPFS} from '../ipfs.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AuthproviderComponent,
    EmailauthComponent,
    PrivateComponent,
    PasswordlessComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireStorageModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
