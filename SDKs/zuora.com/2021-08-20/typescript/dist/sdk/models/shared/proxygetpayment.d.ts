import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the payment in the gateway; use for reconciliation.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * How the payment was created, whether through the API, manually, import, or payment run.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentSourceEnum {
    PaymentRun = "PaymentRun",
    Import = "Import",
    Manually = "Manually",
    Api = "API"
}
/**
 * The status of the payment in Zuora. The value depends on the type of payments.
 *
 * @remarks
 *
 * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
 * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
 *
 */
export declare enum ProxyGetPaymentStatusEnum {
    Processed = "Processed",
    Error = "Error",
    Voided = "Voided",
    Canceled = "Canceled"
}
/**
 * Indicates if the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * The type of the payment, whether the payment is external or electronic.
 *
 * @remarks
 *
 */
export declare enum ProxyGetPaymentTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class ProxyGetPayment extends SpeakeasyBase {
    /**
     * The unique account ID for the customer that the payment is for.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The accounting code for the payment. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     *
     */
    accountingCode?: string;
    /**
     * The amount of the payment.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The applied amount of the payment.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the Invoice Settlement feature enabled.
     *
     */
    appliedAmount?: number;
    /**
     * If you have the Invoice Settlement feature disabled, the value of this field is the amount of the payment to apply to a credit balance.
     *
     * @remarks
     *
     * If you have the Invoice Settlement feature enabled, the value of this field returned in the response is `0` for the payments that are created after the enablement.
     *
     */
    appliedCreditBalanceAmount?: number;
    /**
     * The authorization transaction ID from the payment gateway.
     *
     * @remarks
     *
     */
    authTransactionId?: string;
    /**
     * The first six digits of the credit card or debit card used for the payment, when applicable.
     *
     * @remarks
     *
     */
    bankIdentificationNumber?: string;
    /**
     * The date and time when the payment was canceled.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Additional information related to the payment.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the payment.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment was created.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The date when the payment takes effect.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * The name of the gateway instance that processes the payment.
     *
     * @remarks
     *
     */
    gateway?: string;
    /**
     * A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead.
     *
     * @remarks
     *
     */
    gatewayOrderId?: string;
    /**
     * The message returned from the payment gateway for the payment. This message is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponse?: string;
    /**
     * The code returned from the payment gateway for the payment. This code is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponseCode?: string;
    /**
     * The status of the payment in the gateway; use for reconciliation.
     *
     * @remarks
     *
     */
    gatewayState?: ProxyGetPaymentGatewayStateEnum;
    /**
     * The unique ID of a payment. For example, 2c92c095592623ea01596621ada84352.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the payment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * The date and time when a payment was marked and waiting for batch submission to the payment process.
     *
     * @remarks
     *
     */
    markedForSubmissionOn?: Date;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     * The ID of the payment method used for the payment.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The unique ID of the payment method snapshot which is a copy of the particular payment method used in a transaction.
     *
     * @remarks
     *
     */
    paymentMethodSnapshotId?: string;
    /**
     * The unique identification number of the payment. For example, P-00000028.
     *
     * @remarks
     *
     */
    paymentNumber?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The amount of the payment that is refunded. The value of this field is `0` if no refund is made against the payment.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * The transaction ID returned by the payment gateway if there is an additional transaction for the payment. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    secondPaymentReferenceId?: string;
    /**
     * The date and time when the payment was settled in the payment processor. This field is used by the Spectrum gateway only and not applicable to other gateways.
     *
     * @remarks
     *
     */
    settledOn?: Date;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     *
     * @remarks
     *
     */
    softDescriptor?: string;
    /**
     * A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.
     *
     * @remarks
     *
     */
    softDescriptorPhone?: string;
    /**
     * How the payment was created, whether through the API, manually, import, or payment run.
     *
     * @remarks
     *
     */
    source?: ProxyGetPaymentSourceEnum;
    /**
     * The name of the source. The value is a Payment Run number or a file name.
     *
     * @remarks
     *
     */
    sourceName?: string;
    /**
     * The status of the payment in Zuora. The value depends on the type of payments.
     *
     * @remarks
     *
     * - If you have the Invoice Settlement feature disabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Voided`. For external payments, the status can be `Processed` or `Canceled`.
     * - If you have the Invoice Settlement feature enabled, for electronic payments, the status can be `Processed`, `Processing`, `Error`, or `Canceled`. For external payments, the status can be `Processed` or `Canceled`.
     *
     */
    status?: ProxyGetPaymentStatusEnum;
    /**
     * The date and time when the payment was submitted.
     *
     * @remarks
     *
     */
    submittedOn?: Date;
    /**
     * Date when the payment was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    transactionNS?: string;
    /**
     * Indicates if the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyGetPaymentTransferredToAccountingEnum;
    /**
     * The type of the payment, whether the payment is external or electronic.
     *
     * @remarks
     *
     */
    type?: ProxyGetPaymentTypeEnum;
    /**
     * The unapplied amount of the payment.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the Invoice Settlement feature enabled.
     *
     */
    unappliedAmount?: number;
    /**
     * The ID of the Zuora user who last updated the payment.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the payment was last updated.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
