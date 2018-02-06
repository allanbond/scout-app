import { Component, Input, OnInit } from '@angular/core';
import { Rank } from '../model/rank';
import { Scout } from '../model/scout';

@Component({
  selector: 'tsa-scout-overview',
  templateUrl: './scout-overview.component.html',
  styleUrls: ['./scout-overview.component.scss']
})
export class ScoutOverviewComponent implements OnInit {

  name: string;
  rank: string;
  ranks: Rank[];
  @Input() scout: Scout;

  constructor() { }

  ngOnInit() {
    this.name = 'David Bond';
    this.rank = 'Bear';
    this.ranks = [
      { label: 'Bobcat', color: 'yellow' },
      { label: 'Wolf', color: 'red' },
      { label: 'Bear', color: 'blue' },
      { label: 'Webelos', color: 'blue' },
      { label: 'Arrow of Light', color: 'yellow' }
    ]
  }

}
