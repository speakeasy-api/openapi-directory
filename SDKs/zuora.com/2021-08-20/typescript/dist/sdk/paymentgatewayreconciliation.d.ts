import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentGatewayReconciliation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Reconcile a refund
     *
     * @remarks
     * Reconciles a refund when receiving the gateway reconciliation request or event.
     *
     */
    postReconcileRefund(req: operations.POSTReconcileRefundRequest, config?: AxiosRequestConfig): Promise<operations.POSTReconcileRefundResponse>;
    /**
     * Reject a payment
     *
     * @remarks
     * Sets the Payment status to "Rejected", creates a refund for the payment amount, and returns the Refund object as response.
     *
     */
    postRejectPayment(req: operations.POSTRejectPaymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectPaymentResponse>;
    /**
     * Reverse a payment
     *
     * @remarks
     * Sets the Payment status to "Reversed", creates a refund for the amount specified in the request, and returns the Refund object as response.
     *
     */
    postReversePayment(req: operations.POSTReversePaymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTReversePaymentResponse>;
    /**
     * Settle a payment
     *
     * @remarks
     * Sets the Payment status to "Settled" and returns the Payment object as response.
     *
     */
    postSettlePayment(req: operations.POSTSettlePaymentRequest, config?: AxiosRequestConfig): Promise<operations.POSTSettlePaymentResponse>;
}
