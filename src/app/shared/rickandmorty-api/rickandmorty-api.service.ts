import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {

  constructor(
    private http: HttpClient,
    @Inject('AppConfig') private appConfig: any
  ) {
    console.log(appConfig);
  }

  // listLocations({ name: string }) {}
}
