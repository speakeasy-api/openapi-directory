import { Accounts } from "./accounts";
import { Applications } from "./applications";
import { Certificates } from "./certificates";
import { ComputeNodes } from "./computenodes";
import { Files } from "./files";
import { Jobs } from "./jobs";
import { JobSchedules } from "./jobschedules";
import { Pools } from "./pools";
import { Tasks } from "./tasks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://batch.core.windows.net"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * A client for issuing REST requests to the Azure Batch service.
 */
export declare class SDK {
    accounts: Accounts;
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
    private _globals;
    constructor(props?: SDKProps);
}
