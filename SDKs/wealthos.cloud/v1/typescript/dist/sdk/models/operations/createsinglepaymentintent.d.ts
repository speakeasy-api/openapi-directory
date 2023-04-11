import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateSinglePaymentIntentSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class CreateSinglePaymentIntentRequestBodyInvestmentInstructions extends SpeakeasyBase {
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
export declare enum CreateSinglePaymentIntentRequestBodyPaymentTypeEnum {
    Card = "card",
    ElectronicFundTransfer = "electronic_fund_transfer"
}
export declare enum CreateSinglePaymentIntentRequestBodyPurposeEnum {
    Cash = "cash",
    Invest = "invest"
}
export declare enum CreateSinglePaymentIntentRequestBodyServiceProviderEnum {
    Stripe = "stripe",
    Truelayer = "truelayer",
    None = "none"
}
/**
 * Parameters based on prerequisites of the selected provider
 */
export declare class CreateSinglePaymentIntentRequestBodyServiceProviderParams extends SpeakeasyBase {
    /**
     * Bank account ID of Investor (mandatory only if service_provider="truelayer")
     */
    bankAccountId?: string;
}
export declare class CreateSinglePaymentIntentRequestBody extends SpeakeasyBase {
    /**
     * Amount as a numeral string with two decimal points. (ex: 1500.00). Minimum allowed amount is 1.00
     */
    amount: string;
    /**
     * must be a currency configured for the Pot
     */
    currency?: string;
    /**
     * mandatory only if purpose:"invest" and pot does not have a portfolio template attached (e.g. An execution-only or direct-to-consumer wealth manager).
     */
    investmentInstructions?: CreateSinglePaymentIntentRequestBodyInvestmentInstructions[];
    paymentType: CreateSinglePaymentIntentRequestBodyPaymentTypeEnum;
    potId: string;
    purpose: CreateSinglePaymentIntentRequestBodyPurposeEnum;
    /**
     * Unique request id to ensure idempotency. (ex: UUID)
     */
    requestId: string;
    serviceProvider: CreateSinglePaymentIntentRequestBodyServiceProviderEnum;
    /**
     * Parameters based on prerequisites of the selected provider
     */
    serviceProviderParams?: CreateSinglePaymentIntentRequestBodyServiceProviderParams;
}
export declare class CreateSinglePaymentIntentRequest extends SpeakeasyBase {
    requestBody: CreateSinglePaymentIntentRequestBody;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreateSinglePaymentIntent500ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateSinglePaymentIntent429ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreateSinglePaymentIntent409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreateSinglePaymentIntent409ApplicationJSON extends SpeakeasyBase {
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
    status: CreateSinglePaymentIntent409ApplicationJSONStatusEnum;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CreateSinglePaymentIntent403ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateSinglePaymentIntent401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateSinglePaymentIntent400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class CreateSinglePaymentIntent201ApplicationJSONInvestmentInstructions extends SpeakeasyBase {
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
export declare enum CreateSinglePaymentIntent201ApplicationJSONPaymentTypeEnum {
    Card = "card",
    ElectronicFundTransfer = "electronic_fund_transfer"
}
export declare enum CreateSinglePaymentIntent201ApplicationJSONPurposeEnum {
    Cash = "cash",
    Invest = "invest"
}
export declare enum CreateSinglePaymentIntent201ApplicationJSONServiceProviderEnum {
    Stripe = "stripe",
    Truelayer = "truelayer",
    None = "none"
}
/**
 * Parameters based on prerequisites of the selected provider
 */
export declare class CreateSinglePaymentIntent201ApplicationJSONServiceProviderParams extends SpeakeasyBase {
    /**
     * Bank account ID of Investor (include if service_provider="truelayer")
     */
    bankAccountId?: string;
    /**
     * Client secret (include if service_provider="stripe")
     */
    clientSecret?: string;
    /**
     * URL for Hosted Payment Page (include if service_provider="truelayer")
     */
    hppUrl?: string;
    /**
     * Payment intent ID (include if service_provider="truelayer" or service_provider="stripe")
     */
    paymentIntentId?: string;
    /**
     * Publishable key (include if service_provider="stripe")
     */
    publishableKey?: string;
}
export declare enum CreateSinglePaymentIntent201ApplicationJSONStatusEnum {
    PendingConfirmation = "pending_confirmation",
    Processing = "processing",
    Succeeded = "succeeded"
}
/**
 * Resource created
 */
export declare class CreateSinglePaymentIntent201ApplicationJSON extends SpeakeasyBase {
    amount: string;
    currency: string;
    /**
     * mandatory only if purpose:"invest" and pot does not have a portfolio template attached (e.g. An execution-only or direct-to-consumer wealth manager)
     */
    investmentInstructions?: CreateSinglePaymentIntent201ApplicationJSONInvestmentInstructions[];
    paymentType: CreateSinglePaymentIntent201ApplicationJSONPaymentTypeEnum;
    potId: string;
    purpose: CreateSinglePaymentIntent201ApplicationJSONPurposeEnum;
    serviceProvider: CreateSinglePaymentIntent201ApplicationJSONServiceProviderEnum;
    /**
     * Parameters based on prerequisites of the selected provider
     */
    serviceProviderParams?: CreateSinglePaymentIntent201ApplicationJSONServiceProviderParams;
    status: CreateSinglePaymentIntent201ApplicationJSONStatusEnum;
    transactionId: string;
}
export declare class CreateSinglePaymentIntentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource created
     */
    createSinglePaymentIntent201ApplicationJSONObject?: CreateSinglePaymentIntent201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createSinglePaymentIntent400ApplicationJSONObject?: CreateSinglePaymentIntent400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createSinglePaymentIntent401ApplicationJSONObject?: CreateSinglePaymentIntent401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createSinglePaymentIntent403ApplicationJSONObject?: CreateSinglePaymentIntent403ApplicationJSON;
    /**
     * Duplicate request
     */
    createSinglePaymentIntent409ApplicationJSONObject?: CreateSinglePaymentIntent409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createSinglePaymentIntent429ApplicationJSONObject?: CreateSinglePaymentIntent429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createSinglePaymentIntent500ApplicationJSONObject?: CreateSinglePaymentIntent500ApplicationJSON;
}
