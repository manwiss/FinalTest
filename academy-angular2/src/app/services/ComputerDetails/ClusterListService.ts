import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IClusterDetails} from '../../dtos/ClusterDetails';

@Injectable()
export class ClusterListService 
    extends ReadOnlyServiceBase<IClusterDetails> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/clusters");
        
    }
}