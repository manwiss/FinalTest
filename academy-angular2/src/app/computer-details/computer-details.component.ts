import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ComputerDetailsService} from '../services/ComputerDetails/ComputerDetailsService';
import {UsageDataServiceFactory, IUsageDataServiceFactory} from '../services/ComputerDetails/UsageDataServiceFactory';

import {ComputerDetailsViewModel} from '../viewModels/ComputerDetailsViewModel';

import {IComputerDetails} from '../dtos/ComputerDetails';
import {IUsageData} from '../dtos/UsageData';

@Component({
  moduleId: module.id,
  selector: 'computer-details',
  templateUrl: 'computer-details.component.html',
  styleUrls: ['computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {

  private _service: ComputerDetailsService;

  private _factory: IUsageDataServiceFactory;

  computerId: string;

  computer: IComputerDetails;

  usageData$: Observable<IUsageData[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: ComputerDetailsService, factory: UsageDataServiceFactory, route: ActivatedRoute, router: Router) {
    this._service = service;
    this._factory = factory;
    this._route = route;
    this._router = router;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.computerId = params['computerId'];

      this.retrieveUsageData();
      this.retrieveComputer();
    });
  }

  private retrieveComputer(): void {
    this._service.getItemById(this.computerId).subscribe(computer => this.computer = computer);
  }

  private retrieveUsageData(): void {
      let service = this._factory.create(this.computerId);

      this.usageData$ = service.getAllItems();
  }
}
