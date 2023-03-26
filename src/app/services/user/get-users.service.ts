import { createuser } from './../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from 'src/app/controller/common';
import { user } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}
  getUsers() {
    const token = sessionStorage.getItem('token');
    return this.http.get<user[]>(
      `${BaseUrl}/api/service/rest/utility/getAllActivities`,
      {
        observe: 'response',
        responseType: 'json',
        headers: {
          'X-Auth-Token': token ? token : '',
        },
      }
    );
  }
  createUsers(data: createuser) {
    const token = sessionStorage.getItem('token');
    return this.http.post<user[]>(
      `${BaseUrl}/api/service/rest/utility/addActivity`,
      data,
      {
        observe: 'response',
        responseType: 'json',
        headers: {
          'X-Auth-Token': token ? token : '',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  }
}
