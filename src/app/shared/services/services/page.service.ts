import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageService {

  url = 'page';

  constructor(private _base: BaseService) { }

  public get(): Observable<any> {
    return this._base.get(this.url);
  }

  public getById(id: any): Observable<any> {
    return this._base.getById(this.url, id);
  }

  public getWithParams(params: string) {
    return this._base.getWithParams(this.url, params);
  }

  public post(data): Observable<any> {
    return this._base.post(this.url, data);
  }

  public put(data): Observable<any> {
    const url = this.url + '/' + data.id;
    return this._base.put(url, data);
  }

  public putActive(data): Observable<any> {
    const url = this.url + '/active/' + data.id;
    return this._base.put(url, data);
  }

  public delete(id: string): Observable<any> {
    return this._base.delete(this.url, id);
  }

}
