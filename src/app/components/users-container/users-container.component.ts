import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users, UsersData } from 'src/app/api/model/users';
import { Body } from 'src/app/api/model/body';
import { FilterUsersService } from 'src/app/services/filter-users.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  usersData: Array<Users>;
  totalPages: number;
  pageLimit: number = 10;
  pageNumber: number = 1;
  body: Body;
  term: string;
  constructor(private route: ActivatedRoute, private filterUsersService: FilterUsersService) { }

  ngOnInit(): void {
    this.usersData = this.route.snapshot.data['users']?.items;
    this.filterUsersService.getFilteredTerm().subscribe((res: string) => {
      if (res !== '') {
        this.term = res;
        this.getUsers();
      } else {
        this.usersData = [];
      }
    });
  }

  getUsers() {
    this.body = {q: this.term, perPage: this.pageLimit, page: this.pageNumber }
    this.filterUsersService.getUsersByName(this.body).toPromise().then((resp: any) => {
        this.usersData = resp.items!;
        this.totalPages = +resp.total_count;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.error.errors[0].message)
    });
  }

  pageChanged(paginationSelection: any) {
    this.pageLimit = paginationSelection.itemsPerPage;
    this.pageNumber = paginationSelection.page;
    this.getUsers();

  }
}
