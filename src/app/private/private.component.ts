import { Component,Inject, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import { AngularFireStorage } from 'angularfire2/storage';
import {AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';                                                               
import { tap, filter, switchMap, finalize } from 'rxjs/operators';
import * as firebase from 'firebase';
import * as CryptoJS from 'crypto-js';
import { from } from 'rxjs';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})


export class PrivateComponent implements OnInit {
  htmlContent:string;

  encryptText: string;  
  encPassword: string;  
  decPassword:string;  
  conversionEncryptOutput: string;  
  conversionDecryptOutput:string;
  fileContent:String |ArrayBuffer;
  userID: string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  selectedFiles: FileList;
  selectedDoc: string = '';
count=0;

///smart contract variables
account: any;
accounts: any;

balance: number;
sendingAmount: number;
recipientAddress: string;
status: string;
    
  constructor(public authService: AuthService,private afStorage: AngularFireStorage,public afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(user=>{
      if(user) this.userID=user.uid;
      console.log(this.userID);
    })
  
  }
  //method is used to encrypt and decry
  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files[0];

    
  }

upload() {
  let file=this.selectedFiles;
  var Title=(<HTMLOptionElement>document.getElementById("selectDoc")).value;
  const id = Math.random().toString(36).substring(2);

  this.ref = this.afStorage.ref("Document Pool").child(this.userID).child(Title).child(id);
  this.task = this.ref.put(file); 
  this.count++;
  console.log(this.count);

  this.task.snapshotChanges().pipe(
  finalize(() => {
    this.ref.getDownloadURL().subscribe(url => {
      console.log(  "URL is =  " + url); // <-- do what ever you want with the url..\
      var gallery= firebase.database().ref("Document").child(id).set({
        "documentName":Title,
        "Keyword":id,
        "Url":url
      });
      firebase.database().ref("Users").child(this.userID).child(Title).set(id);
  
     
    });
  })
).subscribe();

if(this.count==3)
{
  document.getElementById("enable").removeAttribute("disabled");
}

  }



logout()
{
  this.authService.logOut();
  
}

}