import { Component, OnInit,Inject } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import { AngularFireModule, FirebaseApp } from '@angular/fire';

import {AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Http} from '@angular/http';
import { Subject, BehaviorSubject } from 'rxjs';
import {} from 'rxjs'
import * as _ from 'lodash';
import {environment} from '../../environments/environment';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Buffer } from 'buffer';
import {IpfsService } from '../../ipfs.service';



@Component({
  selector: 'app-passwordless',
  template: ` <input #file placeholder="Some text to store in IPFS" />
  <button (click)="set('hello.txt', file.value)">Set</button>
  <button (click)="get(hash)">Get</button>
  <p>{{ hash }}</p>` 
})

export class PasswordlessComponent implements OnInit {
  public hash: string;
  constructor(@Inject(IpfsService) private ipfs) {}

  async ngOnInit() {
    const version = await this.ipfs.version();
    console.log({version});
  }

  public async set(path: string, value: string) {
    const content = Buffer.from(value);
    const filesAdded = await this.ipfs.files.add({path, content});
    this.hash = filesAdded[0].hash;
  }

  public async get(hash: string) {
    const fileBuffer = await this.ipfs.files.cat(hash);
    console.log(fileBuffer.toString());
  }

}

