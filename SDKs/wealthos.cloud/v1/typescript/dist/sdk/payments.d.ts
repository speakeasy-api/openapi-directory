import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSinglePaymentIntent - Create Single Payment Intent
     *
     * Create a new Single Payment Intent for the given `amount` and `currency`. If successful, a new Payment Intent will be created with `pending_confirmation` status and the API will return the `client_secret` and `publishable_key` as response.
    **/
    createSinglePaymentIntent(req: operations.CreateSinglePaymentIntentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSinglePaymentIntentResponse>;
    /**
     * getAllPayments - Get All Payments
     *
     * Returns all the Payments setup for the tenant in an array
    **/
    getAllPayments(req: operations.GetAllPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPaymentsResponse>;
    /**
     * getPayment - Get Payment by Transaction Id
     *
     * Get Payment by transaction ID
    **/
    getPayment(req: operations.GetPaymentRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * getPotPayments - Get Payments by Pot Id
     *
     *  Only last 1000 records will be recieved if the result contain more that 1000 payments. In that case, the pagination should be used.
    **/
    getPotPayments(req: operations.GetPotPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPotPaymentsResponse>;
}
