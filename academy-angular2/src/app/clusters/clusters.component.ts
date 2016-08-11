import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ClusterListService} from '../services/ComputerDetails/ClusterListService';



import {ClusterDetailsViewModel} from '../viewModels/ClusterDetailsViewModel';

import {IClusterDetails} from '../dtos/ClusterDetails';

@Component({
  moduleId: module.id,
  selector: 'app-clusters',
  templateUrl: 'clusters.component.html',
  styleUrls: ['clusters.component.css'],
  providers:[ClusterListService]
})
export class ClusterListComponent implements OnInit {

private _service: ClusterListService;
  private _router: Router;

  clusters$: Observable<IClusterDetails[]>;

  constructor(service:ClusterListService, router: Router) {
    this._service = service;
    this._router = router;
    this.clusters$ = service.getAllItems();
    
    
   }

  ngOnInit() {
  }

  
   onNavigate(cluster: ClusterDetailsViewModel): void {
    console.log(`Navigating to '${cluster.clusterId}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}` );
  }

}




