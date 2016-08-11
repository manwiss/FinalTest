import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/from';

import {IReadOnlyService} from '../ReadOnlyService';
import {ComputerDetailsViewModel, UsageData} from '../../viewModels/ComputerDetailsViewModel';

export class DummyComputerDetailsService {
    
    private _computers: ComputerDetailsViewModel[];

    constructor() {
        let computer1 = new ComputerDetailsViewModel();

        computer1.name = "dummy1";
        computer1.ipAddress = "127.0.0.1";
        computer1.memory = 9000;
        computer1.user = "me";

        let data1 = new UsageData();

        data1.cpuUsage = 35;
        data1.memoryUsage = 50;
        data1.availableDiskSpace = 300;
        data1.timeStamp = new Date();

        computer1.usageData = [];

        computer1.usageData.push(data1);
        
        let computer2 = new ComputerDetailsViewModel();

        computer2.name = "dummy2";
        computer2.ipAddress = "127.0.0.1";
        computer2.memory = 9000;
        computer2.user = "another";

        this._computers = [computer1, computer2];        
    }

    getAllItems(): Observable<ComputerDetailsViewModel[]> {
        return Observable.from([this._computers]);
    }

    getItemById(computerName: string): Observable<ComputerDetailsViewModel> {
        let match = this._computers.filter(c => c.name == computerName);

        return Observable.from(match);
    }
}