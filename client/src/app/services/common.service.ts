import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  postMsg(data: { [key: string]: string }): Observable<any> {
    const url = 'http://localhost:3000/api/earth-mars-comm/message';
    return this._http.post(url, data);
  }

  getMsg(){
    const url = 'http://localhost:3000/api/earth-mars-comm/message';
    return this._http.get(url);
  }
}
