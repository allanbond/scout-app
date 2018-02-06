import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Scout } from '../model/scout';

@Injectable()
export class ScoutService {

  scoutsCollection: AngularFirestoreCollection<Scout>;
  scouts$: Observable<Scout []>;

  constructor(private afs: AngularFirestore) { }

  private _loadScouts(): Observable<Scout []> {
    this.scoutsCollection = this.afs.collection<Scout>('scouts');
    this.scouts$ = this.scoutsCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const scout = action.payload.doc.data() as Scout;
        scout.id = action.payload.doc.id;
        return scout;
      });
    });

    return this.scouts$;
  }

  addScout(scout: Scout) {
    this.scoutsCollection.add(scout);
  }

  getScouts(): Observable<Scout []> {
    return this.scouts$ || this._loadScouts();
  }

  getScout(id: string): Observable<Scout> {
    const scoutDoc = this.afs.doc<Scout>('scouts/' + id);
    return scoutDoc.valueChanges();
  }
}
