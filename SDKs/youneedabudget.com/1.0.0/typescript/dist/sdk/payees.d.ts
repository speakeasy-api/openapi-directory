import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The payees for a budget
 */
export declare class Payees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Single payee
     *
     * @remarks
     * Returns a single payee
     */
    getPayeeById(req: operations.GetPayeeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeeByIdResponse>;
    /**
     * List payees
     *
     * @remarks
     * Returns all payees
     */
    getPayees(req: operations.GetPayeesRequest, config?: AxiosRequestConfig): Promise<operations.GetPayeesResponse>;
}
