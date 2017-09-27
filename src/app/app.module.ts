import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ListWorkerComponent } from './list/list-worker/list-worker.component';
import { WorkerComponent } from './list/worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWorkerComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
