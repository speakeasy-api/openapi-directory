import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentGatewayReconciliation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postReconcileRefund - Reconcile a refund
     *
     * Reconciles a refund when receiving the gateway reconciliation request or event.
     *
    **/
    postReconcileRefund(req: operations.PostReconcileRefundRequest, config?: AxiosRequestConfig): Promise<operations.PostReconcileRefundResponse>;
    /**
     * postRejectPayment - Reject a payment
     *
     * Sets the Payment status to "Rejected", creates a refund for the payment amount, and returns the Refund object as response.
     *
    **/
    postRejectPayment(req: operations.PostRejectPaymentRequest, config?: AxiosRequestConfig): Promise<operations.PostRejectPaymentResponse>;
    /**
     * postReversePayment - Reverse a payment
     *
     * Sets the Payment status to "Reversed", creates a refund for the amount specified in the request, and returns the Refund object as response.
     *
    **/
    postReversePayment(req: operations.PostReversePaymentRequest, config?: AxiosRequestConfig): Promise<operations.PostReversePaymentResponse>;
    /**
     * postSettlePayment - Settle a payment
     *
     * Sets the Payment status to "Settled" and returns the Payment object as response.
     *
    **/
    postSettlePayment(req: operations.PostSettlePaymentRequest, config?: AxiosRequestConfig): Promise<operations.PostSettlePaymentResponse>;
}
