import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Calls } from "./calls";
import { Events } from "./events";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/vis/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    calls: Calls;
    events: Events;
    users: Users;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
