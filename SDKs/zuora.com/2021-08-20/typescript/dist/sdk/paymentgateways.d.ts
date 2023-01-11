import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentGateways {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPaymentgateways - List all payment gateways
     *
     * Retrieves the basic information about all the payment gateways.
     *
    **/
    getPaymentgateways(req: operations.GetPaymentgatewaysRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentgatewaysResponse>;
}
