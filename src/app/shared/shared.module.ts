import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RickandmortyApiService } from './rickandmorty-api/rickandmorty-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [ RickandmortyApiService ]
})
export class SharedModule { }
