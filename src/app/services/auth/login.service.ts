import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../../controller/common';
import { creds } from 'src/app/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(data: creds) {
    console.log(data);

    return this.http.get(`${BaseUrl}/api/service/rest/user/getCurrentUser`, {
      observe: 'response',
      responseType: 'json',
      headers: {
        Authorization: 'Basic ' + btoa(`${data.username}:${data.password}`),
      },
    });
  }
}
