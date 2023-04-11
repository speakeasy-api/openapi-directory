import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPaymentSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    /**
     * Transaction Id
     */
    transactionId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPayment500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPayment429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPayment404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPayment403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPayment401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPayment400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetPaymentRootTypeForPaymentsInvestmentInstructions extends SpeakeasyBase {
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
export declare enum GetPaymentRootTypeForPaymentsPaymentTypeEnum {
    Card = "card",
    ElectronicFundTransfer = "electronic_fund_transfer"
}
export declare enum GetPaymentRootTypeForPaymentsPurposeEnum {
    Cash = "cash",
    Invest = "invest"
}
export declare enum GetPaymentRootTypeForPaymentsServiceProviderEnum {
    Stripe = "stripe",
    Truelayer = "truelayer",
    None = "none"
}
/**
 * Custom parameters based on prerequisites of the selected provider
 */
export declare class GetPaymentRootTypeForPaymentsServiceProviderParams extends SpeakeasyBase {
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
export declare enum GetPaymentRootTypeForPaymentsStatusEnum {
    PendingConfirmation = "pending_confirmation",
    Processing = "processing",
    Succeeded = "succeeded",
    Cancelled = "cancelled",
    Failed = "failed"
}
/**
 * success
 */
export declare class GetPaymentRootTypeForPayments extends SpeakeasyBase {
    amount: string;
    currency: string;
    /**
     * mandatory only if purpose:"invest" and pot does not have a portfolio template attached (e.g. An execution-only or direct-to-consumer wealth manager)
     */
    investmentInstructions?: GetPaymentRootTypeForPaymentsInvestmentInstructions[];
    paymentType: GetPaymentRootTypeForPaymentsPaymentTypeEnum;
    potId: string;
    purpose: GetPaymentRootTypeForPaymentsPurposeEnum;
    serviceProvider: GetPaymentRootTypeForPaymentsServiceProviderEnum;
    /**
     * Custom parameters based on prerequisites of the selected provider
     */
    serviceProviderParams?: GetPaymentRootTypeForPaymentsServiceProviderParams;
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
    status: GetPaymentRootTypeForPaymentsStatusEnum;
    transactionId: string;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    rootTypeForPayments?: GetPaymentRootTypeForPayments;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getPayment400ApplicationJSONObject?: GetPayment400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPayment401ApplicationJSONObject?: GetPayment401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPayment403ApplicationJSONObject?: GetPayment403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPayment404ApplicationJSONObject?: GetPayment404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPayment429ApplicationJSONObject?: GetPayment429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPayment500ApplicationJSONObject?: GetPayment500ApplicationJSON;
}
