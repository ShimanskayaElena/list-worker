import { Component, OnInit } from '@angular/core';

import { ListService } from '../../core/list.service';
import { Worker } from '../../shared/worker.model';
import { WorkerComponent } from '../worker/worker.component';

import { data } from '../../shared/data';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.css']
})
export class ListWorkerComponent implements OnInit {

  listWorker; // list of all employees
  selectedWorker: Worker; // employee, information about which will be displayed in the modal window
  errorMessage: string;

  constructor( private listService: ListService) { }

  ngOnInit() {

    // Так как у репозитория на github (https://github.com/ShimanskayaElena/list-worker)
    // и у источика данных для приложения (http://jsonplaceholder.typicode.com/users)
    // разные протоколы у меня не получилось сделать демо версию приложения на gh-pages
    // поэтому я вынуждена упростить получение данных, чтобы можно было увидеть реализацию этого проекта
    // это никак не отразилось на его функциональности

    /* this.listService.getListWorker()
      .subscribe(
        data => this.listWorker = data,
        error => this.errorMessage = <any>error
      );*/

    this.listWorker = data;

    this.selectedWorker = this.listService.getSelectedWorker();
  }

  onSelect( worker: Worker): void {
    this.selectedWorker = worker;
    this.listService.setSelectedWorker(worker);
  }

  delete( worker: Worker): void {
    this.selectedWorker = null;
    this.listService.setSelectedWorker( this.selectedWorker);
  }
}
