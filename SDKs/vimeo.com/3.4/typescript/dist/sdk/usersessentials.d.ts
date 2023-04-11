import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Edit a user
     */
    editUser(req: operations.EditUserRequest, config?: AxiosRequestConfig): Promise<operations.EditUserResponse>;
    /**
     * Edit a user
     */
    editUserAlt1(req: operations.EditUserAlt1RequestBody, config?: AxiosRequestConfig): Promise<operations.EditUserAlt1Response>;
    /**
     * Get a user
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Get a user
     */
    getUserAlt1(config?: AxiosRequestConfig): Promise<operations.GetUserAlt1Response>;
}
