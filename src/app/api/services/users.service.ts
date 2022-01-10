import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { UsersData} from '../model/users';
import  {Body} from '../model/body';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams  } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(body: Body): Observable<UsersData> {
    let params = new HttpParams();
    params = params.append('page', String(body.page) || '1' );
    params = params.append('per_page', String(body.perPage) || '10' );
    params = params.append('q', body.q );
    
    return this.httpClient.get<UsersData>(`${environment.baseUrl}` + '/search/users', { params: params });
  }
}
