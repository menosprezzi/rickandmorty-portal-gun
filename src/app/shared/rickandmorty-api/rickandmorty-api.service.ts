import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListLocationsParams, Paginated, RAMLocation } from './rickandmorty-api.types';


@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {
  apiUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('AppConfig') private appConfig: any
  ) {
    this.apiUrl = appConfig.rickandmortyApiUrl;
  }

  fetchPage<T>(url: string) {
    return this.http.get(url) as Observable<Paginated<T>>;
  }

  listLocations({ name }: ListLocationsParams) {
    return this.http.get(this.apiUrl + '/location/', {
      params: {
        name
      }
    }) as Observable<Paginated<RAMLocation>>;
  }
}
