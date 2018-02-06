import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Scout } from '../model/scout';
import { ScoutService } from '../services/scout.service';

@Component({
  selector: 'tsa-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {
  scouts$: Observable<Scout []>;

  constructor(private _scoutService: ScoutService) { }

  ngOnInit() {
    this.scouts$ = this._scoutService.getScouts();
  }

  addScout(scout: Scout) {
    this._scoutService.addScout(scout);  
  }
}
