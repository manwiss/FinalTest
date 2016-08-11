import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsService';

import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';

import {IComputerDetails} from '../dtos/ComputerDetails';

@Component({
  moduleId: module.id,
  selector: 'app-computer-list',
  templateUrl: 'computer-list.component.html',
  styleUrls: ['computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  private _service: ComputerDetailsService;
  private _router: Router;

  computers$: Observable<IComputerDetails[]>;

  constructor(service:ComputerDetailsService, router: Router) {
    this._service = service;
    this._router = router;
    this.computers$ = service.getAllItems();
   }

  ngOnInit() {
  }

  onNavigate(computer: ComputerDetailsViewModel): void {
    console.log(`Navigating to '${computer.name}'...`);

    this._router.navigateByUrl(`computers/${computer.name}`);
  }

}









