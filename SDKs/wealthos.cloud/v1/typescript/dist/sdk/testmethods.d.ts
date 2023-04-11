import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Test methods are used for easier testing of connectivity, keys and tokens. Since they are not tied to a speific functionality you can use them freely
 *
 * @remarks
 *
 */
export declare class TestMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Wealth Manager Greeting for BE
     */
    getBEGreeting(config?: AxiosRequestConfig): Promise<operations.GetBEGreetingResponse>;
}
