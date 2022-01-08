import { Component, OnInit, Output } from '@angular/core';
import { FilterUsersService } from 'src/app/services/filter-users.service';
@Component({
  selector: 'app-user-filteration',
  templateUrl: './user-filteration.component.html',
  styleUrls: ['./user-filteration.component.scss']
})
export class UserFilterationComponent implements OnInit {
  searchfield: string = '';
  constructor(private filterUsersService: FilterUsersService) { }

  ngOnInit(): void {
  }

  search() {
    this.filterUsersService.setFilteredTerm(this.searchfield);
  }
  reset() {
    this.searchfield = '';
    this.filterUsersService.setFilteredTerm('');
  }
}
