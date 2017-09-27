import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    ListService
  ]
})
export class CoreModule { }
