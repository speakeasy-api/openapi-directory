import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Investors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createInvestor - Create Investor
     *
     * Create a new investor in the system.
    **/
    createInvestor(req: operations.CreateInvestorRequest, config?: AxiosRequestConfig): Promise<operations.CreateInvestorResponse>;
    /**
     * getAllInvestors - Get All Investors
     *
     * Returns all the investors in an array
    **/
    getAllInvestors(req: operations.GetAllInvestorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllInvestorsResponse>;
    /**
     * getInvestor - Get Investor
     *
     * Get details of an investor
    **/
    getInvestor(req: operations.GetInvestorRequest, config?: AxiosRequestConfig): Promise<operations.GetInvestorResponse>;
    /**
     * updateInvestor - Update Investor
     *
     * Update an existing investor. WealthOS will update only the fields sent in the request. Field mentioned as Nullable can be deleted by updating those values with null.
    **/
    updateInvestor(req: operations.UpdateInvestorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInvestorResponse>;
}
