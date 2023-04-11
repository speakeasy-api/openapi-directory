import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChargeRevenueSummaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all details of a charge revenue summary
     *
     * @remarks
     * Retrieves the details of a charge revenue summary by specifying the charge revenue summary number. The response includes all revenue items associated with the charge revenue summary.
     *
     */
    getCRSByCRSNumber(req: operations.GETCRSByCRSNumberRequest, config?: AxiosRequestConfig): Promise<operations.GETCRSByCRSNumberResponse>;
    /**
     * Retrieve a charge revenue summary by charge ID
     *
     * @remarks
     * Retrieves the details of a charge revenue summary by specifying the subscription charge ID. This response retrieves all revenue items associated with a charge revenue summary.
     *
     */
    getCRSByChargeID(req: operations.GETCRSByChargeIDRequest, config?: AxiosRequestConfig): Promise<operations.GETCRSByChargeIDResponse>;
}
