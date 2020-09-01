import { Injectable } from '@angular/core';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BEERS_URL = 'https://api.punkapi.com/v2/beers';

  constructor() { }
}
