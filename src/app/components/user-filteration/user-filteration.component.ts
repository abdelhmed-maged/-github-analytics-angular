import { Component } from '@angular/core';
import { FilterUsersService } from 'src/app/services/filter-users.service';
@Component({
  selector: 'app-user-filteration',
  templateUrl: './user-filteration.component.html',
  styleUrls: ['./user-filteration.component.scss']
})
export class UserFilterationComponent {
  searchfield: string = '';
  constructor(private filterUsersService: FilterUsersService) { }

  search() {
    this.filterUsersService.setFilteredTerm(this.searchfield);
  }
  reset() {
    this.searchfield = '';
    this.filterUsersService.setFilteredTerm('');
  }
}
