import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum GETRefundCreditMemoTypeFinanceInformationTransferredToAccountingEnum {
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
export declare class GETRefundCreditMemoTypeFinanceInformation extends SpeakeasyBase {
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
     */
    bankAccountAccountingCodeType?: string;
    /**
     * Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: GETRefundCreditMemoTypeFinanceInformationTransferredToAccountingEnum;
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
     */
    unappliedPaymentAccountingCodeType?: string;
}
/**
 * The status of the refund in the gateway.
 *
 * @remarks
 *
 */
export declare enum GETRefundCreditMemoTypeGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * How an external refund was issued to a customer.
 *
 * @remarks
 *
 */
export declare enum GETRefundCreditMemoTypeMethodTypeEnum {
    Ach = "ACH",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    PayPal = "PayPal",
    WireTransfer = "WireTransfer",
    DebitCard = "DebitCard",
    CreditCardReferenceTransaction = "CreditCardReferenceTransaction",
    BankTransfer = "BankTransfer",
    Other = "Other"
}
/**
 * The status of the refund.
 *
 * @remarks
 *
 */
export declare enum GETRefundCreditMemoTypeStatusEnum {
    Processed = "Processed",
    Canceled = "Canceled",
    Error = "Error",
    Processing = "Processing"
}
/**
 * The type of the refund.
 *
 * @remarks
 *
 */
export declare enum GETRefundCreditMemoTypeTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
export declare class GETRefundCreditMemoType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     * Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    synctoNetSuiteNS?: string;
    /**
     * The ID of the account associated with this refund. Zuora associates the refund automatically with the account from the associated payment.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the refund.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The date and time when the refund was cancelled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Comments about the refund.
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
     * The date and time when the refund was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-06 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the credit memo that is refunded.
     *
     * @remarks
     *
     */
    creditMemoId?: string;
    /**
     * Container for the finance information related to the refund.
     *
     * @remarks
     *
     */
    financeInformation?: GETRefundCreditMemoTypeFinanceInformation;
    /**
     * The ID of the gateway instance that processes the refund.
     *
     * @remarks
     *
     */
    gatewayId?: string;
    /**
     * The message returned from the payment gateway for the refund. This message is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponse?: string;
    /**
     * The response code returned from the payment gateway for the refund. This code is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponseCode?: string;
    /**
     * The status of the refund in the gateway.
     *
     * @remarks
     *
     */
    gatewayState?: GETRefundCreditMemoTypeGatewayStateEnum;
    /**
     * The ID of the created refund.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The date and time when a refund was marked and waiting for batch submission to the payment process, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    markedForSubmissionOn?: Date;
    /**
     * How an external refund was issued to a customer.
     *
     * @remarks
     *
     */
    methodType?: GETRefundCreditMemoTypeMethodTypeEnum;
    /**
     * The unique identification number of the refund.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The ID of the payment associated with the refund.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * The unique ID of the payment method that the customer used to make the refund.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The unique ID of the payment method snapshot, which is a copy of the particular payment method used in a transaction.
     *
     * @remarks
     *
     */
    paymentMethodSnapshotId?: string;
    /**
     * A code identifying the reason for the transaction.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The date when the refund takes effect, in yyyy-mm-dd format.
     *
     * @remarks
     *
     */
    refundDate?: Date;
    /**
     * The date and time when the refund was issued, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    refundTransactionTime?: Date;
    /**
     * The transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    secondRefundReferenceId?: string;
    /**
     * The date and time when the refund was settled in the payment processor, in `yyyy-mm-dd hh:mm:ss` format. This field is used by the Spectrum gateway only and not applicable to other gateways.
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
     * The status of the refund.
     *
     * @remarks
     *
     */
    status?: GETRefundCreditMemoTypeStatusEnum;
    /**
     * The date and time when the refund was submitted, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    submittedOn?: Date;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * The type of the refund.
     *
     * @remarks
     *
     */
    type?: GETRefundCreditMemoTypeTypeEnum;
    /**
     * The ID of the Zuora user who last updated the refund.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the refund was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-07 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
