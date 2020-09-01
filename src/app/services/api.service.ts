import { Injectable } from '@angular/core';
import { IBeer } from '../ibeer';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpService: HttpClient) { }

  async get(path: string, params?: HttpParams): Promise<IBeer[]> {
    return this.httpService.get<IBeer[]>(path, {params}).toPromise();
  }
}
