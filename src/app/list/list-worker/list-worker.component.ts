import { Component, OnInit } from '@angular/core';

import { ListService } from '../../core/list.service';
import { Worker } from '../../shared/worker.model';
import { WorkerComponent } from '../worker/worker.component';

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
    this.listService.getListWorker()
      .subscribe(
        data => this.listWorker = data,
        error => this.errorMessage = <any>error
      );

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
