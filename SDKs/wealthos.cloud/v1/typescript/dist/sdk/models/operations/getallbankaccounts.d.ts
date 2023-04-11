import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllBankAccountsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetAllBankAccountsRequest extends SpeakeasyBase {
    /**
     * Valid Investor Id
     */
    investorId?: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllBankAccounts500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class GetAllBankAccounts429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Current status of the original request
 */
export declare enum GetAllBankAccounts409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetAllBankAccounts409ApplicationJSON extends SpeakeasyBase {
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Stringified original response body if status is `COMPLETE`
     */
    response?: Record<string, any>;
    /**
     * Current status of the original request
     */
    status: GetAllBankAccounts409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetAllBankAccounts404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class GetAllBankAccounts403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class GetAllBankAccounts401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class GetAllBankAccounts400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * If not populated, will be defaulted to inactive
 */
export declare enum GetAllBankAccounts200ApplicationJSONBankAccountsAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum GetAllBankAccounts200ApplicationJSONBankAccountsDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
export declare class GetAllBankAccounts200ApplicationJSONBankAccounts extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: GetAllBankAccounts200ApplicationJSONBankAccountsAccountStatusEnum;
    /**
     * system generated id
     */
    bankAccountId?: string;
    /**
     * Unique for the investor
     */
    bankAccountNumber: string;
    buildingSocietyRollNumber?: string;
    createdAt?: Date;
    /**
     * Only one account should be the default
     */
    defaultAccount: GetAllBankAccounts200ApplicationJSONBankAccountsDefaultAccountEnum;
    investorId: string;
    referenceVersion?: number;
    sortCode?: string;
    updatedAt?: Date;
}
/**
 * Array of bank accounts
 */
export declare class GetAllBankAccounts200ApplicationJSON extends SpeakeasyBase {
    bankAccounts?: GetAllBankAccounts200ApplicationJSONBankAccounts[];
}
export declare class GetAllBankAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getAllBankAccounts200ApplicationJSONObject?: GetAllBankAccounts200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getAllBankAccounts400ApplicationJSONObject?: GetAllBankAccounts400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllBankAccounts401ApplicationJSONObject?: GetAllBankAccounts401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllBankAccounts403ApplicationJSONObject?: GetAllBankAccounts403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getAllBankAccounts404ApplicationJSONObject?: GetAllBankAccounts404ApplicationJSON;
    /**
     * Duplicate request
     */
    getAllBankAccounts409ApplicationJSONObject?: GetAllBankAccounts409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllBankAccounts429ApplicationJSONObject?: GetAllBankAccounts429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllBankAccounts500ApplicationJSONObject?: GetAllBankAccounts500ApplicationJSON;
}
