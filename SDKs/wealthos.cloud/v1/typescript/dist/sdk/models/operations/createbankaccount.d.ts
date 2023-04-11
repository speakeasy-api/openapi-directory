import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateBankAccountSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * If not populated, will be defaulted to inactive
 */
export declare enum CreateBankAccountRequestBodyAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum CreateBankAccountRequestBodyDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
export declare class CreateBankAccountRequestBodyInput extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: CreateBankAccountRequestBodyAccountStatusEnum;
    /**
     * Unique for the investor
     */
    bankAccountNumber: string;
    buildingSocietyRollNumber?: string;
    /**
     * Only one account should be the default
     */
    defaultAccount: CreateBankAccountRequestBodyDefaultAccountEnum;
    investorId: string;
    sortCode?: string;
}
export declare class CreateBankAccountRequest extends SpeakeasyBase {
    requestBody?: CreateBankAccountRequestBodyInput;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateBankAccount500ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateBankAccount429ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreateBankAccount409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreateBankAccount409ApplicationJSON extends SpeakeasyBase {
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
    status: CreateBankAccount409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class CreateBankAccount404ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateBankAccount403ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateBankAccount401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateBankAccount400ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreateBankAccount201ApplicationJSONAccountStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Only one account should be the default
 */
export declare enum CreateBankAccount201ApplicationJSONDefaultAccountEnum {
    Yes = "yes",
    No = "no"
}
/**
 * success
 */
export declare class CreateBankAccount201ApplicationJSON extends SpeakeasyBase {
    accountName: string;
    /**
     * If not populated, will be defaulted to inactive
     */
    accountStatus?: CreateBankAccount201ApplicationJSONAccountStatusEnum;
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
    defaultAccount: CreateBankAccount201ApplicationJSONDefaultAccountEnum;
    investorId: string;
    referenceVersion?: number;
    sortCode?: string;
    updatedAt?: Date;
}
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    createBankAccount201ApplicationJSONObject?: CreateBankAccount201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createBankAccount400ApplicationJSONObject?: CreateBankAccount400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createBankAccount401ApplicationJSONObject?: CreateBankAccount401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createBankAccount403ApplicationJSONObject?: CreateBankAccount403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    createBankAccount404ApplicationJSONObject?: CreateBankAccount404ApplicationJSON;
    /**
     * Duplicate request
     */
    createBankAccount409ApplicationJSONObject?: CreateBankAccount409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createBankAccount429ApplicationJSONObject?: CreateBankAccount429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createBankAccount500ApplicationJSONObject?: CreateBankAccount500ApplicationJSON;
}
