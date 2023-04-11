import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AppKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new appkey
     *
     * @remarks
     * Creates a new pair of `appKey` and `appToken`.
     */
    createnewappkey(req: shared.CreatenewappkeyRequest, config?: AxiosRequestConfig): Promise<operations.CreatenewappkeyResponse>;
    /**
     * Get appKeys from account
     *
     * @remarks
     * Gets all application keys from an account.
     */
    getappkeysfromaccount(req: operations.GetappkeysfromaccountRequest, config?: AxiosRequestConfig): Promise<operations.GetappkeysfromaccountResponse>;
    /**
     * Update appkey
     *
     * @remarks
     * Activates or deactivates an `appKey` by its ID.
     */
    updateappkey(req: operations.UpdateappkeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateappkeyResponse>;
}
