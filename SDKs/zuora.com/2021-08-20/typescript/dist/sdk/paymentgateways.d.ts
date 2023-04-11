import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentGateways {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all payment gateways
     *
     * @remarks
     * Retrieves the basic information about all the payment gateways.
     *
     */
    getPaymentgateways(req: operations.GETPaymentgatewaysRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentgatewaysResponse>;
}
