import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetBankAccountRequest extends SpeakeasyBase {
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
export declare class GetBankAccount500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBankAccount429ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetBankAccount409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetBankAccount409ApplicationJSON extends SpeakeasyBase {
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
    status: GetBankAccount409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetBankAccount404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBankAccount403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBankAccount401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBankAccount400ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetBankAccount200ApplicationJSONAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum GetBankAccount200ApplicationJSONDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
/**
 * success
 */
export declare class GetBankAccount200ApplicationJSON extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: GetBankAccount200ApplicationJSONAccountStatusEnum;
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
    defaultAccount: GetBankAccount200ApplicationJSONDefaultAccountEnum;
    investorId: string;
    referenceVersion?: number;
    sortCode?: string;
    updatedAt?: Date;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getBankAccount200ApplicationJSONObject?: GetBankAccount200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getBankAccount400ApplicationJSONObject?: GetBankAccount400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getBankAccount401ApplicationJSONObject?: GetBankAccount401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getBankAccount403ApplicationJSONObject?: GetBankAccount403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getBankAccount404ApplicationJSONObject?: GetBankAccount404ApplicationJSON;
    /**
     * Duplicate request
     */
    getBankAccount409ApplicationJSONObject?: GetBankAccount409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getBankAccount429ApplicationJSONObject?: GetBankAccount429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getBankAccount500ApplicationJSONObject?: GetBankAccount500ApplicationJSON;
}
