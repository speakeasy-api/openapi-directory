import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for the finance information related to the refund.
 *
 * @remarks
 *
 */
export declare class POSTSettlePaymentResponseFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code that maps to a bank account in your accounting system.
     *
     * @remarks
     *
     */
    bankAccountAccountingCode?: string;
    /**
     * The type of the accounting code that maps to a bank account in your accounting system.
     *
     * @remarks
     *
     *
     */
    bankAccountAccountingCodeType?: string;
    /**
     * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnum;
    /**
     * The accounting code for the unapplied payment.
     *
     * @remarks
     *
     */
    unappliedPaymentAccountingCode?: string;
    /**
     * The type of the accounting code for the unapplied payment.
     *
     * @remarks
     *
     *
     */
    unappliedPaymentAccountingCodeType?: string;
}
/**
 * The status of the payment in the gateway; used for reconciliation.
 *
 * @remarks
 *
 */
export declare enum POSTSettlePaymentResponseGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * The type of the payment.
 *
 * @remarks
 *
 */
export declare enum POSTSettlePaymentResponseTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
export declare class POSTSettlePaymentResponse extends SpeakeasyBase {
    /**
     * The ID of the customer account that the payment is for.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the payment.
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
     */
    appliedAmount?: number;
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
     * The date and time when the payment was cancelled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Comments about the payment.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the refund.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the chargeback is created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2019-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The amount that the payment transfers to the credit balance. The value is not `0` only for those payments that come from legacy payment operations performed without the Invoice Settlement feature.
     *
     * @remarks
     *
     */
    creditBalanceAmount?: number;
    /**
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The date and time when the payment takes effect, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for the finance information related to the refund.
     *
     * @remarks
     *
     */
    financeInformation?: POSTSettlePaymentResponseFinanceInformation;
    /**
     * The ID of the gateway instance that processes the payment.
     *
     * @remarks
     *
     */
    gatewayId?: string;
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
     * The status of the payment in the gateway; used for reconciliation.
     *
     * @remarks
     *
     */
    gatewayState?: POSTSettlePaymentResponseGatewayStateEnum;
    /**
     * The ID of the payment chargeback.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The date and time when a charge was marked and waiting for batch submission to the payment process, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    markedForSubmissionOn?: Date;
    /**
     * The unique identification number of the payment. For example, P-00000001.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The unique ID of the payment method that the customer used to make the payment.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The unique ID of the payment method snapshot which is a copy of the particular Payment Method used in a transaction.
     *
     * @remarks
     *
     */
    paymentMethodSnapshotId?: string;
    /**
     * The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The amount of the payment that is refunded.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * The transaction ID returned by the payment gateway if there is an additional transaction for the payment.
     *
     * @remarks
     *
     */
    secondPaymentReferenceId?: string;
    /**
     * The date and time when the transaction is settled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    settledOn?: Date;
    /**
     * A payment gateway-specific field that maps Zuora to other gateways.
     *
     * @remarks
     *
     */
    softDescriptor?: string;
    /**
     * A payment gateway-specific field that maps Zuora to other gateways.
     *
     * @remarks
     *
     */
    softDescriptorPhone?: string;
    /**
     * The status of the payment.
     *
     * @remarks
     *
     */
    status?: string;
    /**
     * The date and time when the payment was submitted, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    submittedOn?: Date;
    /**
     * Indicates if the request is processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The type of the payment.
     *
     * @remarks
     *
     */
    type?: POSTSettlePaymentResponseTypeEnum;
    /**
     * The unapplied amount of the payment.
     *
     * @remarks
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
     * The date and time when the payment was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2019-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
