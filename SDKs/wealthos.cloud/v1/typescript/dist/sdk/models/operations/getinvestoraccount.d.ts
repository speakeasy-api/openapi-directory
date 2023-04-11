import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetinvestorAccountSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetinvestorAccountRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the investor account
     */
    accountId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetinvestorAccount500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetinvestorAccount429ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetinvestorAccount409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class GetinvestorAccount409ApplicationJSON extends SpeakeasyBase {
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
    status: GetinvestorAccount409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class GetinvestorAccount404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetinvestorAccount403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetinvestorAccount401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetinvestorAccount400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare enum GetinvestorAccount200ApplicationJSONAccountTypeEnum {
    X = "X",
    Z = "Z",
    B = "B",
    G = "G"
}
/**
 * account status
 */
export declare enum GetinvestorAccount200ApplicationJSONStatusEnum {
    Active = "active"
}
/**
 * success
 */
export declare class GetinvestorAccount200ApplicationJSON extends SpeakeasyBase {
    /**
     * investor account id
     */
    accountId: string;
    accountType?: GetinvestorAccount200ApplicationJSONAccountTypeEnum;
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
     * total contribution by investor for all ISA product types for the current tax year
     */
    currentYearTotalIsaContribution?: string;
    /**
     * total subscription allowance remaining for investor across all ISA product types for the current tax year
     */
    currentYearTotalIsaWithdrawals?: string;
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
     * total subscription allowance remaining for investor across all ISA product types for the current tax year
     */
    isaAllowanceRemaining?: string;
    /**
     * Array of pot IDs attached to Investor Account ID
     */
    potId: string[];
    /**
     * account status
     */
    status: GetinvestorAccount200ApplicationJSONStatusEnum;
    /**
     * Value of holdings across all pots attached to the account ID (including investment products and cash)
     */
    totalMarketValue?: string;
    updatedAt?: Date;
}
export declare class GetinvestorAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getinvestorAccount200ApplicationJSONObject?: GetinvestorAccount200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getinvestorAccount400ApplicationJSONObject?: GetinvestorAccount400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getinvestorAccount401ApplicationJSONObject?: GetinvestorAccount401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getinvestorAccount403ApplicationJSONObject?: GetinvestorAccount403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getinvestorAccount404ApplicationJSONObject?: GetinvestorAccount404ApplicationJSON;
    /**
     * Duplicate request
     */
    getinvestorAccount409ApplicationJSONObject?: GetinvestorAccount409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getinvestorAccount429ApplicationJSONObject?: GetinvestorAccount429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getinvestorAccount500ApplicationJSONObject?: GetinvestorAccount500ApplicationJSON;
}
