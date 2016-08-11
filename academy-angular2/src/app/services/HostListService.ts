import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from './ReadOnlyService';

import {IHostDetails} from './../dtos/HostDetails';

@Injectable()
export class HostListService
    extends ReadOnlyServiceBase<IHostDetails> {

    constructor(http: Http) {
        super(http, "http://192.168.10.106/api/hosts/");
        
    }
}