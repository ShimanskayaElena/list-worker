import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Worker } from '../shared/worker.model';

interface ListWorker {
  data: Worker[];
}

@Injectable()
export class ListService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  private selectedWorker: Worker;

  private property = 'worker';

  constructor( private http: HttpClient) { }

  // <ListWorker> - this is the type of response from the server
  getListWorker() {
    return this.http.get<ListWorker>(this.url);
  }

  getSelectedWorker(): Worker {

    if (localStorage.getItem(this.property)) {
      return JSON.parse(localStorage.getItem(this.property));
    } else {
      return this.selectedWorker;
    }
  }

  setSelectedWorker( worker: Worker): void {
    this.selectedWorker = worker;
    localStorage.setItem( this.property, JSON.stringify(worker));
  }
}
