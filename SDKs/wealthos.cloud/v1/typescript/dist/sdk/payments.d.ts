import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Payments endpoint allows you to put cash into a specific pot in your account by sending a payment intent. This intent must capture the following information regarding the payment:
 *
 * @remarks
 *
 * * Details regarding payment such as the `amount` to collect and the `currency`
 * * Supported `payment_type` (card payments, electronic fund transfers etc.).
 * * Associated key information to track a payment (e.g. `pot_id`).
 * * Intention of payment:
 *     * Cash into the pot only, do not invest (`purpose: "cash"`)
 *     * Invest based on the portfolio attached to the investor (`purpose: "invest"` and `investment_instructions` not populated)
 *     * Invest based on attached instructions (`purpose: "invest"` and `investment_instructions` populated). If the pot has a portfolio attached, then the priority will be given to investment instructions. If the investment instructions apply only for a propotion of money coming in, then the rest will be added as cash.
 *
 * <!-- If you have additional parameters to associate with a payment, you can define a custom object and include it under a top-level field of the request body with the value you used for `payment_type` as its field name. (e.g. `"stripe": {.....}`). -->
 * Additionaly, if the `service_provider` is given as `"truelayer"` extra accept an extra object `service_provider_params` where you have to provide the `bank_account_id`as a key-value pair and you will recieve this object in response including the fields, `bank_account_id`, `payment_intent_id` and `hpp_url`. (e.g `"service_provider_params: {"bank_account_id": "ba-82faf049...", "payment_intent_id: 91aa9de...", "hpp_url":"https://..."}"`).
 *
 * For `"stripe"`, in the response, you will receive the  `payment_intent_id`, `client_secret` and `publishable_key` inside that additional object with the value you used for `payment_type` as its field name. (e.g. `"service_provider_params": {"payment_intent_id: 91aa9de...", "client_secret": "pi_XXXXX", "publishable_key": "pk_test_XXXXX", .....}`).
 *
 * These values will be used with the client library for each payment call for the following purposes.
 *
 * * `payment_intent_id` - to uniquely identify your payment intent
 * * `client_secret` - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
 * * `publishable_key` - to uniquely identify your payment service account
 * * `hpp_url` - The redirect URL for proceed with bank payment (only for Truelayer)
 */
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Single Payment Intent
     *
     * @remarks
     * Create a new Single Payment Intent for the given `amount` and `currency`. If successful, a new Payment Intent will be created with `pending_confirmation` status and the API will return the `client_secret` and `publishable_key` as response.
     */
    createSinglePaymentIntent(req: operations.CreateSinglePaymentIntentRequest, security: operations.CreateSinglePaymentIntentSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSinglePaymentIntentResponse>;
    /**
     * Get All Payments
     *
     * @remarks
     * Returns all the Payments setup for the tenant in an array
     */
    getAllPayments(req: operations.GetAllPaymentsRequest, security: operations.GetAllPaymentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllPaymentsResponse>;
    /**
     * Get Payment by Transaction Id
     *
     * @remarks
     * Get Payment by transaction ID
     */
    getPayment(req: operations.GetPaymentRequest, security: operations.GetPaymentSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * Get Payments by Pot Id
     *
     * @remarks
     *  Only last 1000 records will be recieved if the result contain more that 1000 payments. In that case, the pagination should be used.
     */
    getPotPayments(req: operations.GetPotPaymentsRequest, security: operations.GetPotPaymentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPotPaymentsResponse>;
}
