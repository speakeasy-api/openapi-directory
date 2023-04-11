import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserByOrcid
     */
    getGetUserByOrcid(req: operations.GetGetUserByOrcidRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUserByOrcidResponse>;
    /**
     * loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
     */
    getLogin(req: operations.GetLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetLoginResponse>;
}
