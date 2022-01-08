import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsersData } from '../api/model/users';
import { UsersService } from '../api/services/users.service';
import { Body } from '../api/model/body';
@Injectable({
  providedIn: 'root'
})
export class FilterUsersService {
  private term  = new Subject<string>();
  constructor(private usersService: UsersService) { }

  getFilteredTerm() {
    return this.term.asObservable();
  }
  
  setFilteredTerm(term: string) {
    this.term.next(term);
  }

  getUsersByName(body: Body): Observable<UsersData> {
    return this.usersService.getUsers(body);
  }
}
