import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllPaymentsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Sorting order; results are sorted by creation time.
 */
export declare enum GetAllPaymentsSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAllPaymentsRequest extends SpeakeasyBase {
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
     * Purpose of the payment to be retrieved from the API (cash, invest)
     */
    purpose?: string;
    /**
     * Service provider of the payment to be retrieved from the API (truelayer, stripe, none)
     */
    serviceProvider?: string;
    /**
     * Sorting order; results are sorted by creation time.
     */
    sort?: GetAllPaymentsSortEnum;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllPayments500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPayments429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPayments404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPayments403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPayments401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPayments400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetAllPayments200ApplicationJSONRootTypeForPaymentsInvestmentInstructions extends SpeakeasyBase {
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
export declare enum GetAllPayments200ApplicationJSONRootTypeForPaymentsPaymentTypeEnum {
    Card = "card",
    ElectronicFundTransfer = "electronic_fund_transfer"
}
export declare enum GetAllPayments200ApplicationJSONRootTypeForPaymentsPurposeEnum {
    Cash = "cash",
    Invest = "invest"
}
export declare enum GetAllPayments200ApplicationJSONRootTypeForPaymentsServiceProviderEnum {
    Stripe = "stripe",
    Truelayer = "truelayer",
    None = "none"
}
/**
 * Custom parameters based on prerequisites of the selected provider
 */
export declare class GetAllPayments200ApplicationJSONRootTypeForPaymentsServiceProviderParams extends SpeakeasyBase {
    /**
     * Bank account ID of Investor (include if service_provider="truelayer")
     */
    bankAccountId?: string;
    /**
     * URL for Hosted Payment Page (include if service_provider="truelayer")
     */
    hppUrl?: string;
    /**
     * Payment intent ID (include if service_provider="truelayer")
     */
    paymentIntentId?: string;
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
export declare enum GetAllPayments200ApplicationJSONRootTypeForPaymentsStatusEnum {
    PendingConfirmation = "pending_confirmation",
    Processing = "processing",
    Succeeded = "succeeded",
    Cancelled = "cancelled",
    Failed = "failed"
}
export declare class GetAllPayments200ApplicationJSONRootTypeForPayments extends SpeakeasyBase {
    amount: string;
    currency: string;
    /**
     * mandatory only if purpose:"invest" and pot does not have a portfolio template attached (e.g. An execution-only or direct-to-consumer wealth manager)
     */
    investmentInstructions?: GetAllPayments200ApplicationJSONRootTypeForPaymentsInvestmentInstructions[];
    paymentType: GetAllPayments200ApplicationJSONRootTypeForPaymentsPaymentTypeEnum;
    potId: string;
    purpose: GetAllPayments200ApplicationJSONRootTypeForPaymentsPurposeEnum;
    serviceProvider: GetAllPayments200ApplicationJSONRootTypeForPaymentsServiceProviderEnum;
    /**
     * Custom parameters based on prerequisites of the selected provider
     */
    serviceProviderParams?: GetAllPayments200ApplicationJSONRootTypeForPaymentsServiceProviderParams;
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
    status: GetAllPayments200ApplicationJSONRootTypeForPaymentsStatusEnum;
    transactionId: string;
}
/**
 * A paged array of Payments
 */
export declare class GetAllPayments200ApplicationJSON extends SpeakeasyBase {
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
    payments: GetAllPayments200ApplicationJSONRootTypeForPayments[];
}
export declare class GetAllPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A paged array of Payments
     */
    getAllPayments200ApplicationJSONObject?: GetAllPayments200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getAllPayments400ApplicationJSONObject?: GetAllPayments400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllPayments401ApplicationJSONObject?: GetAllPayments401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllPayments403ApplicationJSONObject?: GetAllPayments403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getAllPayments404ApplicationJSONObject?: GetAllPayments404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllPayments429ApplicationJSONObject?: GetAllPayments429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllPayments500ApplicationJSONObject?: GetAllPayments500ApplicationJSON;
}
