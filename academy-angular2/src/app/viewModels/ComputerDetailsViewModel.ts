export class UsageData {    
    cpuUsage: number;
    memoryUsage: number;
    availableDiskSpace: number;
    timeStamp: Date;
}

export class ComputerDetailsViewModel {    
    name: string;
    ipAddress: string;
    memory: number;
    user: string;

    usageData: UsageData[];
}