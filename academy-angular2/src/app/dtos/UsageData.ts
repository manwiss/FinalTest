

export interface IUsageData {
    cpuUsage: number;
    memoryUsage: number;
    availableDiskSpace: number;
    timeStamp: Date;
}

export class UsageData implements IUsageData {
    
    cpuUsage: number;
    memoryUsage: number;
    availableDiskSpace: number;
    timeStamp: Date;

    constructor(data: any) {
        this.cpuUsage = data.cpuUsage;
        this.memoryUsage = data.memoryUsage;
        this.availableDiskSpace = data.availableDiskSpace;
        this.timeStamp = new Date(data.timeStamp);
    }
}