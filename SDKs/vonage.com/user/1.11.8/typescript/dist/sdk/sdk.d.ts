import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.vonage.com/t/vbc.prod/provisioning"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * userCtrlGetUserById - Get user data by account ID and user ID
    **/
    userCtrlGetUserById(req: operations.UserCtrlGetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.UserCtrlGetUserByIdResponse>;
    /**
     * userCtrlGetUsers - Get account users data by account ID
    **/
    userCtrlGetUsers(req: operations.UserCtrlGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.UserCtrlGetUsersResponse>;
}
