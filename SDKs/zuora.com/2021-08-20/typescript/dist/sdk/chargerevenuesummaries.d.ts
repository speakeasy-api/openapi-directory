import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChargeRevenueSummaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCrsByCrsNumber - List all details of a charge revenue summary
     *
     * Retrieves the details of a charge revenue summary by specifying the charge revenue summary number. The response includes all revenue items associated with the charge revenue summary.
     *
    **/
    getCrsByCrsNumber(req: operations.GetCrsByCrsNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetCrsByCrsNumberResponse>;
    /**
     * getCrsByChargeId - Retrieve a charge revenue summary by charge ID
     *
     * Retrieves the details of a charge revenue summary by specifying the subscription charge ID. This response retrieves all revenue items associated with a charge revenue summary.
     *
    **/
    getCrsByChargeId(req: operations.GetCrsByChargeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCrsByChargeIdResponse>;
}
