import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountingCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an accounting code
     *
     * @remarks
     * This reference describes how to delete an accounting code through the REST API.
     * ## Prerequisites
     * If you have Zuora Finance enabled on your tenant, then you must have the Delete Unused Accounting Code permission.
     * ## Limitations
     * You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.
     *
     */
    deleteAccountingCode(req: operations.DELETEAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.DELETEAccountingCodeResponse>;
    /**
     * Retrieve an accounting code
     *
     * @remarks
     * This reference describes how to query an accounting code through the REST API.
     */
    getAccountingCode(req: operations.GETAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.GETAccountingCodeResponse>;
    /**
     * List all accounting codes
     *
     * @remarks
     * This reference describes how to query all accounting codes in your chart of accounts through the REST API.
     */
    getAllAccountingCodes(req: operations.GETAllAccountingCodesRequest, config?: AxiosRequestConfig): Promise<operations.GETAllAccountingCodesResponse>;
    /**
     * Create an accounting code
     *
     * @remarks
     * This reference describes how to create a new accounting code through the REST API.
     * The accounting code will be active as soon as it has been created.
     *
     * ## Prerequisites
     *   If you have Zuora Finance enabled on your tenant, you must have the  Configure Accounting Codes permission.
     *
     */
    postAccountingCode(req: operations.POSTAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.POSTAccountingCodeResponse>;
    /**
     * Update an accounting code
     *
     * @remarks
     * This reference describes how to update an existing accounting code through the REST API.
     * ## Prerequisites
     *   If you have Zuora Finance enabled on your tenant, you must have the  Manage Accounting Code permission.
     * ## Limitations
     * You can only update accounting codes that are not already associated with any transactions.
     *
     */
    putAccountingCode(req: operations.PUTAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PUTAccountingCodeResponse>;
    /**
     * Activate an accounting code
     *
     * @remarks
     * This reference describes how to activate an accounting code through the REST API.
     *
     * Prerequisites
     * -------------
     * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
     *
     */
    putActivateAccountingCode(req: operations.PUTActivateAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PUTActivateAccountingCodeResponse>;
    /**
     * Deactivate an accounting code
     *
     * @remarks
     * This reference describes how to deactivate an accounting code through the REST API.
     *
     * ## Prerequisites
     * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
     * ## Limitations
     * You can only deactivate accounting codes that are not associated with any transactions.
     * You cannot disable accounting codes of type AccountsReceivable.
     *
     */
    putDeactivateAccountingCode(req: operations.PUTDeactivateAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PUTDeactivateAccountingCodeResponse>;
}
