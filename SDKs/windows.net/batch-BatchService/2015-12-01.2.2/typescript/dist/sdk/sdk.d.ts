import { AxiosInstance } from "axios";
import { Applications } from "./applications";
import { Certificates } from "./certificates";
import { ComputeNodes } from "./computenodes";
import { Files } from "./files";
import { JobSchedules } from "./jobschedules";
import { Jobs } from "./jobs";
import { Pools } from "./pools";
import { Tasks } from "./tasks";
export declare const ServerList: readonly ["https://batch.core.windows.net"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    applications: Applications;
    certificates: Certificates;
    computeNodes: ComputeNodes;
    files: Files;
    jobSchedules: JobSchedules;
    jobs: Jobs;
    pools: Pools;
    tasks: Tasks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
