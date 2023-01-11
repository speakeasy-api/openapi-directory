import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calculate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postApi10Calculate - Calculates the number of miles earned for every frequent flyer program.
    **/
    postApi10Calculate(req: operations.PostApi10CalculateRequest, config?: AxiosRequestConfig): Promise<operations.PostApi10CalculateResponse>;
}
