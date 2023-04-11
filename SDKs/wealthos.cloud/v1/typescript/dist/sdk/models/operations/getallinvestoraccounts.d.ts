import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllinvestorAccountsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetAllinvestorAccountsRequest extends SpeakeasyBase {
    /**
     * multiple account ids as comma seperated string
     */
    accountId?: string;
    /**
     * multiple financial product ids as comma seperated string
     */
    financialProductId?: string;
    /**
     * multiple investor ids as comma seperated string
     */
    investorId?: string;
    /**
     * Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageNumber?: string;
    /**
     * Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageSize?: string;
    /**
     * multiple statuses as comma seperated string
     */
    status?: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllinvestorAccounts500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllinvestorAccounts429ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetAllinvestorAccounts409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetAllinvestorAccounts409ApplicationJSON extends SpeakeasyBase {
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
    status: GetAllinvestorAccounts409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetAllinvestorAccounts404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllinvestorAccounts403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllinvestorAccounts401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllinvestorAccounts400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare enum GetAllinvestorAccounts200ApplicationJSONInvestorAccountsAccountTypeEnum {
    X = "X",
    Z = "Z",
    B = "B",
    G = "G"
}
/**
 * account status
 */
export declare enum GetAllinvestorAccounts200ApplicationJSONInvestorAccountsStatusEnum {
    Active = "active"
}
export declare class GetAllinvestorAccounts200ApplicationJSONInvestorAccounts extends SpeakeasyBase {
    /**
     * investor account id
     */
    accountId: string;
    accountType?: GetAllinvestorAccounts200ApplicationJSONInvestorAccountsAccountTypeEnum;
    createdAt?: Date;
    /**
     * does the Account have contributions for the current tax year
     */
    currentYearSubscription?: boolean;
    /**
     * total contribution by investor for account for the current tax year
     */
    currentYearTotalContribution?: string;
    /**
     * total withdrawal by investor for account for the current tax year
     */
    currentYearTotalWithdrawals?: string;
    /**
     * the first date the account was opened by the investor
     */
    dateOfAccountActivation?: string;
    financialProductId: string;
    /**
     * date of the first subscription received for the current tax year
     */
    firstSubscriptionDateForCurrentYear?: string;
    investorId: string;
    /**
     * account status
     */
    status: GetAllinvestorAccounts200ApplicationJSONInvestorAccountsStatusEnum;
    updatedAt?: Date;
}
/**
 * Array of investor accounts
 */
export declare class GetAllinvestorAccounts200ApplicationJSON extends SpeakeasyBase {
    investorAccounts?: GetAllinvestorAccounts200ApplicationJSONInvestorAccounts[];
    nextPageAvailable?: boolean;
}
export declare class GetAllinvestorAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getAllinvestorAccounts200ApplicationJSONObject?: GetAllinvestorAccounts200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getAllinvestorAccounts400ApplicationJSONObject?: GetAllinvestorAccounts400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllinvestorAccounts401ApplicationJSONObject?: GetAllinvestorAccounts401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllinvestorAccounts403ApplicationJSONObject?: GetAllinvestorAccounts403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getAllinvestorAccounts404ApplicationJSONObject?: GetAllinvestorAccounts404ApplicationJSON;
    /**
     * Duplicate request
     */
    getAllinvestorAccounts409ApplicationJSONObject?: GetAllinvestorAccounts409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllinvestorAccounts429ApplicationJSONObject?: GetAllinvestorAccounts429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllinvestorAccounts500ApplicationJSONObject?: GetAllinvestorAccounts500ApplicationJSON;
}
