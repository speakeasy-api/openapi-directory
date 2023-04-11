import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DKIMConfiguration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate DKIM keys
     *
     * @remarks
     * Create DKIM keys for sender that was setup in VTEX mail servers
     */
    createDKIM(req: operations.CreateDKIMRequest, config?: AxiosRequestConfig): Promise<operations.CreateDKIMResponse>;
}
