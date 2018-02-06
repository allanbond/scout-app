import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScoutService } from '../services/scout.service';
import { Observable } from 'rxjs/Observable';
import { Scout } from '../model/scout';

@Component({
  selector: 'tsa-scout-detail',
  templateUrl: './scout-detail.component.html',
  styleUrls: ['./scout-detail.component.scss']
})
export class ScoutDetailComponent implements OnInit {

  scout$: Observable<Scout>;

  constructor(private route: ActivatedRoute, private _scoutService: ScoutService) { }

  ngOnInit() {
    this.scout$ = this.route.params.switchMap(p => this._scoutService.getScout(p.id));
  }

}
