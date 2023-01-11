import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountingCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAccountingCode - Delete an accounting code
     *
     * This reference describes how to delete an accounting code through the REST API.
     * ## Prerequisites
     * If you have Zuora Finance enabled on your tenant, then you must have the Delete Unused Accounting Code permission.
     * ## Limitations
     * You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.
     *
    **/
    deleteAccountingCode(req: operations.DeleteAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountingCodeResponse>;
    /**
     * getAccountingCode - Retrieve an accounting code
     *
     * This reference describes how to query an accounting code through the REST API.
    **/
    getAccountingCode(req: operations.GetAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountingCodeResponse>;
    /**
     * getAllAccountingCodes - List all accounting codes
     *
     * This reference describes how to query all accounting codes in your chart of accounts through the REST API.
    **/
    getAllAccountingCodes(req: operations.GetAllAccountingCodesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllAccountingCodesResponse>;
    /**
     * postAccountingCode - Create an accounting code
     *
     * This reference describes how to create a new accounting code through the REST API.
     * The accounting code will be active as soon as it has been created.
     *
     * ## Prerequisites
     *   If you have Zuora Finance enabled on your tenant, you must have the  Configure Accounting Codes permission.
     *
    **/
    postAccountingCode(req: operations.PostAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountingCodeResponse>;
    /**
     * putAccountingCode - Update an accounting code
     *
     * This reference describes how to update an existing accounting code through the REST API.
     * ## Prerequisites
     *   If you have Zuora Finance enabled on your tenant, you must have the  Manage Accounting Code permission.
     * ## Limitations
     * You can only update accounting codes that are not already associated with any transactions.
     *
    **/
    putAccountingCode(req: operations.PutAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountingCodeResponse>;
    /**
     * putActivateAccountingCode - Activate an accounting code
     *
     * This reference describes how to activate an accounting code through the REST API.
     *
     * Prerequisites
     * -------------
     * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
     *
    **/
    putActivateAccountingCode(req: operations.PutActivateAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutActivateAccountingCodeResponse>;
    /**
     * putDeactivateAccountingCode - Deactivate an accounting code
     *
     * This reference describes how to deactivate an accounting code through the REST API.
     *
     * ## Prerequisites
     * If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
     * ## Limitations
     * You can only deactivate accounting codes that are not associated with any transactions.
     * You cannot disable accounting codes of type AccountsReceivable.
     *
    **/
    putDeactivateAccountingCode(req: operations.PutDeactivateAccountingCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutDeactivateAccountingCodeResponse>;
}
