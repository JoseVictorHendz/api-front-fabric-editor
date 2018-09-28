import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BASE_URL } from '../globals/constants';

@Injectable()
export class BaseService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/${url}`);
  }

  public getById(url: string, id: any): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/${url}/${id}`);
  }

  public getWithParams(url: string, params: string) {
    return this.http.get<any>(`${BASE_URL}/${url}/${params}`);
  }

  public post(url: string, data: object): Observable<any> {
    return this.http.post(`${BASE_URL}/${url}`, data);
  }

  public put(url: string, data: object): Observable<any> {
    return this.http.put(`${BASE_URL}/${url}`, data);
  }

  public delete(url: string, id: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/${url}/${id}`);
  }

}
