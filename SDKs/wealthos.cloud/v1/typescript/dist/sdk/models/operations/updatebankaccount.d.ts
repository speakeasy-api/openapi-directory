import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare enum UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
/**
 * JSON for the Update bank account resource type
 */
export declare class UpdateBankAccountUpdateRequestBodyForBankAccount extends SpeakeasyBase {
    accountName?: string;
    accountStatus?: UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
    /**
     * Only one account should be the default
     */
    defaultAccount?: UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
    referenceVersion: number;
}
export declare class UpdateBankAccountRequest extends SpeakeasyBase {
    requestBody: UpdateBankAccountUpdateRequestBodyForBankAccount;
    /**
     * Bank Account Id
     */
    bankAccountId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class UpdateBankAccount500ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateBankAccount429ApplicationJSON extends SpeakeasyBase {
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
export declare enum UpdateBankAccount409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class UpdateBankAccount409ApplicationJSON extends SpeakeasyBase {
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
    status: UpdateBankAccount409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class UpdateBankAccount404ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateBankAccount403ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateBankAccount401ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdateBankAccount400ApplicationJSON extends SpeakeasyBase {
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
export declare enum UpdateBankAccount201ApplicationJSONAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum UpdateBankAccount201ApplicationJSONDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
/**
 * success
 */
export declare class UpdateBankAccount201ApplicationJSON extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: UpdateBankAccount201ApplicationJSONAccountStatusEnum;
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
    defaultAccount: UpdateBankAccount201ApplicationJSONDefaultAccountEnum;
    investorId: string;
    referenceVersion?: number;
    sortCode?: string;
    updatedAt?: Date;
}
export declare class UpdateBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    updateBankAccount201ApplicationJSONObject?: UpdateBankAccount201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    updateBankAccount400ApplicationJSONObject?: UpdateBankAccount400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    updateBankAccount401ApplicationJSONObject?: UpdateBankAccount401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    updateBankAccount403ApplicationJSONObject?: UpdateBankAccount403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    updateBankAccount404ApplicationJSONObject?: UpdateBankAccount404ApplicationJSON;
    /**
     * Duplicate request
     */
    updateBankAccount409ApplicationJSONObject?: UpdateBankAccount409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    updateBankAccount429ApplicationJSONObject?: UpdateBankAccount429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    updateBankAccount500ApplicationJSONObject?: UpdateBankAccount500ApplicationJSON;
}
