import { Component, Input } from '@angular/core';
import { Users } from 'src/app/api/model/users';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent  {
  @Input() user: Users;
  constructor() { }

  navigateToUserAccount(url: any) {
   window.open(url);
  }
}
