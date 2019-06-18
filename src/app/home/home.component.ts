import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { RickandmortyApiService } from '../shared/rickandmorty-api/rickandmorty-api.service';
import { RAMLocation } from '../shared/rickandmorty-api/rickandmorty-api.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  $searchInputValue = new Subject<string>();
  subscriptions: Subscription[] = [];
  locationList: RAMLocation[];
  nextPage: string;

  constructor(private rickandmortyApi: RickandmortyApiService) { }

  ngOnInit() {
    const searchInputSubscription = this.$searchInputValue
      .pipe(debounceTime(300))
      .pipe(distinctUntilChanged())
      .subscribe(value => this.search(value));

    this.subscriptions.concat(searchInputSubscription);
  }

  ngOnDestroy() {
    this.subscriptions
      .map(s => s.unsubscribe());
  }

  async search(name: string) {
    if (!name || name === '') {
      this.locationList = null;
      this.nextPage = null;
      return;
    }

    let paginatedLocations;
    try {
      paginatedLocations = await this.rickandmortyApi.listLocations({name})
        .toPromise();

      this.locationList = paginatedLocations.results;
      this.nextPage = paginatedLocations.info.next;
    } catch (e) {
      this.locationList = [];
    }
  }

  async fetchNextPage() {
    const paginatedLocations = await this.rickandmortyApi.fetchPage<RAMLocation>(this.nextPage)
      .toPromise();

    this.locationList.concat(...paginatedLocations.results);
    this.nextPage = paginatedLocations.info.next;
  }
}
