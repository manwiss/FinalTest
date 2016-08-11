import {Http} from '@angular/http';

import {IReadOnlyService, ReadOnlyServiceBase} from '../ReadOnlyService';

import {IUsageData, UsageData} from '../../dtos/UsageData';

export class UsageDataService 
    extends ReadOnlyServiceBase<IUsageData> {

    constructor(http: Http, baseUrl: string) {
        super(http, baseUrl);        
    }

    protected mapItem(data: any): IUsageData {
        return new UsageData(data);
    }
}