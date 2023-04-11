import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sla {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Calculate SLA
     *
     * @remarks
     * Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date.
     *
     * The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.
     */
    calculateSLA(req: operations.CalculateSLARequest, config?: AxiosRequestConfig): Promise<operations.CalculateSLAResponse>;
}
