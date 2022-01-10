import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Repos, userDetail } from '../api/model/user-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private httpClient: HttpClient) { }

  getUserFollowers(userName: string): Observable<userDetail[]>  {
    return this.httpClient.get<userDetail[]>(environment.baseUrl + `/users/${userName}/followers`);
  }
  
  getUserFollowing(userName: string): Observable<userDetail[]> {
    return this.httpClient.get<userDetail[]>(environment.baseUrl + `/users/${userName}/following`);
  }

  getUserRepo(userName: string): Observable<Repos> {
    return this.httpClient.get<Repos>(environment.baseUrl + `/users/${userName}/repos`);

  }
}
