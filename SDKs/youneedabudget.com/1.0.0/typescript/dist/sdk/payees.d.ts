import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPayeeById - Single payee
     *
     * Returns a single payee
    **/
    getPayeeById(req: operations.GetPayeeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdResponse>;
    /**
     * getPayees - List payees
     *
     * Returns all payees
    **/
    getPayees(req: operations.GetPayeesRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
}
