import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Investor endpoint allows you to create investors, update investors and retrieve investor records in bulk or individually. If a KYC/AML service has been set-up through WealthOS (e.g. Onfido), then the investor will be verified using this service.
 *
 * @remarks
 *
 * When retrieving the investor, the following fields will provide information regarding the investor’s status that can be used for deciding on what subsequent investor action must be permitted.
 *
 * * dealing_status: Normally set to Active once KYC/AML passes, however may be independently set by administrators if required.
 *
 * * kyc_aml_status - the status of the KYC/AML check
 *
 * * Status - ultimate status of the investor derived from dealing_status and kcy_aml_status.
 *
 * If WealthOS is not set-up to manage the KYC/AML service then the wealth manager must specify the `kyc_aml_status` and `dealing_status` on investor creation and update. The `status` of the investor will be consider active only when the `kyc_aml_status : "clear"` and `dealing_status : "active"`
 */
export declare class Investors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Investor
     *
     * @remarks
     * Create a new investor in the system.
     */
    createInvestor(req: operations.CreateInvestorRequest, security: operations.CreateInvestorSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInvestorResponse>;
    /**
     * Get All Investors
     *
     * @remarks
     * Returns all the investors in an array
     */
    getAllInvestors(req: operations.GetAllInvestorsRequest, security: operations.GetAllInvestorsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllInvestorsResponse>;
    /**
     * Get Investor
     *
     * @remarks
     * Get details of an investor
     */
    getInvestor(req: operations.GetInvestorRequest, security: operations.GetInvestorSecurity, config?: AxiosRequestConfig): Promise<operations.GetInvestorResponse>;
    /**
     * Update Investor
     *
     * @remarks
     * Update an existing investor. WealthOS will update only the fields sent in the request. Field mentioned as Nullable can be deleted by updating those values with null.
     */
    updateInvestor(req: operations.UpdateInvestorRequest, security: operations.UpdateInvestorSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateInvestorResponse>;
}
