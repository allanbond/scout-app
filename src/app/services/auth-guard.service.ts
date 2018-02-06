import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';

@Injectable()
export class AuthGuardService {
  private _user: firebase.User;

  get user$(): Observable<User> {
    return this._afAuth.authState;
  }

  constructor(private _afAuth: AngularFireAuth) {
    _afAuth.authState.subscribe(user => {
      this._user = user;
    })
  }

  canActivate() {
    return !!this._user;
  }
}
