import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transaction at the payment gateway.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentTransactionLogGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * The type of the transaction, either making a payment, or canceling a payment.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum {
    Authorization = "Authorization",
    Sale = "Sale",
    Void = "Void",
    Inquiry = "Inquiry",
    VoidAuth = "VoidAuth"
}
export declare class ProxyGetPaymentTransactionLog extends SpeakeasyBase {
    /**
     * The response code returned by the payment gateway referring to the AVS international response of the payment transaction.
     *
     * @remarks
     *
     */
    avsResponseCode?: string;
    /**
     * The ID of the batch used to send the transaction if the request was sent in a batch.
     *
     * @remarks
     *
     */
    batchId?: string;
    /**
     * The response code returned by the payment gateway referring to the CVV international response of the payment transaction.
     *
     * @remarks
     *
     */
    cvvResponseCode?: string;
    /**
     * The name of the payment gateway used to transact the current payment transaction log.
     *
     * @remarks
     *
     */
    gateway?: string;
    /**
     * The code returned by the payment gateway for the payment. This code is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayReasonCode?: string;
    /**
     * The message returned by the payment gateway for the payment. This message is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayReasonCodeDescription?: string;
    /**
     * The state of the transaction at the payment gateway.
     *
     * @remarks
     *
     */
    gatewayState?: ProxyGetPaymentTransactionLogGatewayStateEnum;
    /**
     * The type of the transaction, either making a payment, or canceling a payment.
     *
     * @remarks
     *
     */
    gatewayTransactionType?: ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum;
    /**
     * The ID of the payment transaction log.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the payment wherein the payment transaction log was recorded.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * The payment transaction request string sent to the payment gateway.
     *
     * @remarks
     *
     */
    requestString?: string;
    /**
     * The payment transaction response string returned by the payment gateway.
     *
     * @remarks
     *
     */
    responseString?: string;
    /**
     * The transaction date when the payment was performed.
     *
     * @remarks
     *
     */
    transactionDate?: Date;
    /**
     * The transaction ID returned by the payment gateway. This field is used to reconcile payment transactions between the payment gateway and records in Zuora.
     *
     * @remarks
     *
     */
    transactionId?: string;
}
