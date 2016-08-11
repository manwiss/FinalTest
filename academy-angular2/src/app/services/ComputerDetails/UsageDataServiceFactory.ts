import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {UsageDataService} from './UsageDataService';

import {IReadOnlyService} from '../ReadOnlyService';

import {IUsageData} from '../../dtos/UsageData';

export interface IUsageDataServiceFactory {
    create(computerId: string): IReadOnlyService<IUsageData>;
}

@Injectable()
export class UsageDataServiceFactory 
    implements IUsageDataServiceFactory {

    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }
        
    create(computerId: string): IReadOnlyService<IUsageData> {
        let url: string = `http://localhost:5000/api/computers/${computerId}/data/`;

        return new UsageDataService(this._http, url);
    }

}