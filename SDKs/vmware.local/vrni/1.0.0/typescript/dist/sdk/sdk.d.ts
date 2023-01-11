import { AxiosInstance } from "axios";
import { Applications } from "./applications";
import { Authentication } from "./authentication";
import { DataSources } from "./datasources";
import { Entities } from "./entities";
import { Info } from "./info";
import { Infrastructure } from "./infrastructure";
import { Microsegmentation } from "./microsegmentation";
import { Search } from "./search";
export declare const ServerList: readonly ["http://vmware.local", "https://vrni.example.com/api/ni"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    applications: Applications;
    authentication: Authentication;
    dataSources: DataSources;
    entities: Entities;
    info: Info;
    infrastructure: Infrastructure;
    microsegmentation: Microsegmentation;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
