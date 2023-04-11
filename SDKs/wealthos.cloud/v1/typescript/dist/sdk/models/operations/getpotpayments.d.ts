import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotPaymentsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPotPaymentsRequest extends SpeakeasyBase {
    /**
     * Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageNumber?: string;
    /**
     * Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageSize?: string;
    /**
     * Payment type of the payment to be retrieved from the API (electronic_fund_transfer, card)
     */
    paymentType?: string;
    /**
     * Pot Id
     */
    potId: string;
    /**
     * Purpose of the payment to be retrieved from the API (cash, invest)
     */
    purpose?: string;
    /**
     * Service provider of the payment to be retrieved from the API (truelayer, stripe, none)
     */
    serviceProvider?: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPotPayments500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotPayments429ApplicationJSON extends SpeakeasyBase {
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
 * The specified resource was not found
 */
export declare class GetPotPayments404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotPayments403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotPayments401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetPotPayments200ApplicationJSONRootTypeForPaymentsInvestmentInstructions extends SpeakeasyBase {
    investmentProductId: string;
    /**
     * Require if `value` is not available. Must be in correct pattern (eg: 25, 332.34, 1050.0025). For `funds`, upto 4 decimal places. For `equities`, `bonds` and `etf`, 0 decimal places allowed.
     */
    quantity?: string;
    /**
     * Require if `quantity` is not available. Must be in correct pattern (upto 2 decimal places, eg: 25, 332.3, 1050.25).
     */
    value?: string;
}
export declare enum GetPotPayments200ApplicationJSONRootTypeForPaymentsPaymentTypeEnum {
    Card = "card",
    ElectronicFundTransfer = "electronic_fund_transfer"
}
export declare enum GetPotPayments200ApplicationJSONRootTypeForPaymentsPurposeEnum {
    Cash = "cash",
    Invest = "invest"
}
export declare enum GetPotPayments200ApplicationJSONRootTypeForPaymentsServiceProviderEnum {
    Stripe = "stripe",
    Truelayer = "truelayer",
    None = "none"
}
/**
 * Status of the payment
 *
 * @remarks
 *
 * - `pending_confirmation`: Payment is pending approvals and confirmation
 * - `processing`: Payment is confirmed, and being processed. Depending on the payment method, this may be instantaneous (e.g. card) or take multiple days (e.g. cheque)
 * - `succeeded`: Payment is successful. Cash is cleaned in account.
 * - `cancelled`: Payment cancelled, and any held funds have been returned.
 * - `failed`: Payment failed due to insufficient funds, invalid card details, network issues etc.
 */
export declare enum GetPotPayments200ApplicationJSONRootTypeForPaymentsStatusEnum {
    PendingConfirmation = "pending_confirmation",
    Processing = "processing",
    Succeeded = "succeeded",
    Cancelled = "cancelled",
    Failed = "failed"
}
export declare class GetPotPayments200ApplicationJSONRootTypeForPayments extends SpeakeasyBase {
    amount: string;
    currency: string;
    /**
     * mandatory only if purpose:"invest" and pot does not have a portfolio template attached (e.g. An execution-only or direct-to-consumer wealth manager)
     */
    investmentInstructions?: GetPotPayments200ApplicationJSONRootTypeForPaymentsInvestmentInstructions[];
    paymentType: GetPotPayments200ApplicationJSONRootTypeForPaymentsPaymentTypeEnum;
    purpose: GetPotPayments200ApplicationJSONRootTypeForPaymentsPurposeEnum;
    serviceProvider: GetPotPayments200ApplicationJSONRootTypeForPaymentsServiceProviderEnum;
    /**
     * Status of the payment
     *
     * @remarks
     *
     * - `pending_confirmation`: Payment is pending approvals and confirmation
     * - `processing`: Payment is confirmed, and being processed. Depending on the payment method, this may be instantaneous (e.g. card) or take multiple days (e.g. cheque)
     * - `succeeded`: Payment is successful. Cash is cleaned in account.
     * - `cancelled`: Payment cancelled, and any held funds have been returned.
     * - `failed`: Payment failed due to insufficient funds, invalid card details, network issues etc.
     */
    status: GetPotPayments200ApplicationJSONRootTypeForPaymentsStatusEnum;
    transactionId: string;
}
/**
 * success
 */
export declare class GetPotPayments200ApplicationJSON extends SpeakeasyBase {
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
    payments: GetPotPayments200ApplicationJSONRootTypeForPayments[];
    potId: string;
}
export declare class GetPotPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPotPayments200ApplicationJSONObject?: GetPotPayments200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPotPayments401ApplicationJSONObject?: GetPotPayments401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPotPayments403ApplicationJSONObject?: GetPotPayments403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPotPayments404ApplicationJSONObject?: GetPotPayments404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPotPayments429ApplicationJSONObject?: GetPotPayments429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPotPayments500ApplicationJSONObject?: GetPotPayments500ApplicationJSON;
}
