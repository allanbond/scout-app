import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tsa-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  initials: string;
  @Input() color: string;
  @Input() imgUrl: string;
  @Input() set name(name: string) {
    if (name) {
      const nameTokens = name.split(" ");
      this.initials = nameTokens.reduce((initials, value) => initials + value.charAt(0).toUpperCase(), '');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
