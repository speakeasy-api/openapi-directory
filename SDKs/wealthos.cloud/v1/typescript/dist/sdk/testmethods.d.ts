import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TestMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBeGreeting - Wealth Manager Greeting for BE
    **/
    getBeGreeting(req: operations.GetBeGreetingRequest, config?: AxiosRequestConfig): Promise<operations.GetBeGreetingResponse>;
}
