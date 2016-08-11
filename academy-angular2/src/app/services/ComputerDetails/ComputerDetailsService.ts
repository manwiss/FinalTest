import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IComputerDetails} from '../../dtos/ComputerDetails';

@Injectable()
export class ComputerDetailsService 
    extends ReadOnlyServiceBase<IComputerDetails> {

    constructor(http: Http) {
        super(http, "http://localhost:5000/api/computers/");
        
    }
}