
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {HostListService} from '../services/HostListService';
import {HostDetailsViewModel} from '../viewModels/HostDetailsViewModel';

import {IHostDetails} from '../dtos/HostDetails';
import {IClusterDetails} from '../dtos/ClusterDetails';




@Component({
  moduleId: module.id,
  selector: 'HostDetails',
  templateUrl: 'host-details.component.html',
  styleUrls: ['host-details.component.css'],
  providers:[HostListService]
})
export class HostDetailsComponent implements OnInit {

  private _service: HostListService;
  private _router: Router;
  private _route: ActivatedRoute;
  private IClusterDetails

  clusterId:string;
  cluster: IClusterDetails;

  hosts$: Observable<IHostDetails[]>;

  constructor(service:HostListService, router: Router, route: ActivatedRoute ) {
    this._service = service;
    this._router = router;
    this._route = route;
    this.hosts$ = service.getAllItems();
   }

  

  ngOnInit() {
      this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];
      this.retrieveCluster();
    });
  }



  private retrieveCluster(): void {
    this._service.getItemById(this.clusterId).subscribe(cluster => this.cluster = cluster);
  }

 

  
   onNavigate(cluster: HostDetailsViewModel): void {
    console.log(`Navigating to '${cluster.clusterId}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}`);
  }

}

