import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { User } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewScoutFormComponent } from './new-scout-form/new-scout-form.component';
import { Scout } from './model/scout';

@Component({
  selector: 'tsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  scoutsCollection: AngularFirestoreCollection<Scout>
  user$: Observable<User>;

  constructor(authGuardService: AuthGuardService, public afAuth: AngularFireAuth, 
    private afs: AngularFirestore, public dialog: MatDialog, private _router: Router) {
    this.user$ = authGuardService.user$;
  }

  ngOnInit() {
    this.scoutsCollection = this.afs.collection<Scout>('scouts');
  }

  onAddPerson() {
    const dialogRef = this.dialog.open(NewScoutFormComponent);
    dialogRef.afterClosed().subscribe((scout: Scout) => {
      this.scoutsCollection.add(scout);
    });
  }

  onLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      this._router.navigate(['/scouts']);
    });
  }

  onLogout() {
    this.afAuth.auth.signOut().then(() => {
      this._router.navigate(['/home']);
    });
  }

}