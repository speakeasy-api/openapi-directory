import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum GETARPaymentTypewithSuccessFinanceInformationTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for the finance information related to the payment.
 *
 * @remarks
 *
 */
export declare class GETARPaymentTypewithSuccessFinanceInformation extends SpeakeasyBase {
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
     * Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: GETARPaymentTypewithSuccessFinanceInformationTransferredToAccountingEnum;
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
 * The status of the payment in the gateway; use for reconciliation.
 *
 * @remarks
 *
 */
export declare enum GETARPaymentTypewithSuccessGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}
/**
 * The status of the payment.
 *
 * @remarks
 *
 */
export declare enum GETARPaymentTypewithSuccessStatusEnum {
    Draft = "Draft",
    Processing = "Processing",
    Processed = "Processed",
    Error = "Error",
    Canceled = "Canceled",
    Posted = "Posted"
}
/**
 * The type of the payment.
 *
 * @remarks
 *
 */
export declare enum GETARPaymentTypewithSuccessTypeEnum {
    External = "External",
    Electronic = "Electronic"
}
/**
 * Container for custom fields of a Payment object.
 *
 * @remarks
 *
 */
export declare class GETARPaymentTypewithSuccess extends SpeakeasyBase {
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
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
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
     * The ID of the Zuora user who created the payment part.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
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
     * When Standalone Payment is not enabled, the `currency` of the payment must be the same as the payment currency defined in the customer account settings through Zuora UI.
     *
     * @remarks
     *
     * When Standalone Payment is enabled and `standalone` is `true`, the `currency` of the standalone payment can be different from the payment currency defined in the customer account settings. The amount will not be summed up to the account balance or key metrics regardless of currency.
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
     * Container for the finance information related to the payment.
     *
     * @remarks
     *
     */
    financeInformation?: GETARPaymentTypewithSuccessFinanceInformation;
    /**
     * The ID of the gateway instance that processes the payment.
     *
     * @remarks
     *
     */
    gatewayId?: string;
    /**
     * A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created.
     *
     * @remarks
     *
     */
    gatewayOrderId?: string;
    /**
     * The reason of gateway reconciliation.
     *
     * @remarks
     *
     */
    gatewayReconciliationReason?: string;
    /**
     * The status of gateway reconciliation.
     *
     * @remarks
     *
     */
    gatewayReconciliationStatus?: string;
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
    gatewayState?: GETARPaymentTypewithSuccessGatewayStateEnum;
    /**
     * The unique ID of the payment. For example, 4028905f5a87c0ff015a87eb6b75007f.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The date and time when a payment was marked and waiting for batch submission to the payment process, in `yyyy-mm-dd hh:mm:ss` format.
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
     * The payout ID of the payment from the gateway side.
     *
     * @remarks
     *
     */
    payoutId?: string;
    /**
     * The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.
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
     * The transaction ID returned by the payment gateway if there is an additional transaction for the payment. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     *
     */
    secondPaymentReferenceId?: string;
    /**
     * The date and time when the payment was settled in the payment processor, in `yyyy-mm-dd hh:mm:ss` format. This field is used by the Spectrum gateway only and not applicable to other gateways.
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
     * This field is only available if the support for standalone payment is enabled.
     *
     * @remarks
     *
     * The value `true` indicates this is a standalone payment that is created and processed in Zuora through Zuora gateway integration but will be settled outside of Zuora. No settlement data will be created. The standalone payment cannot be applied, unapplied, or transferred.
     *
     * The value `false` indicates this is an ordinary payment that is created, processed, and settled in Zuora.
     *
     */
    standalone?: boolean;
    /**
     * The status of the payment.
     *
     * @remarks
     *
     */
    status?: GETARPaymentTypewithSuccessStatusEnum;
    /**
     * The date and time when the payment was submitted, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    submittedOn?: Date;
    /**
     * The type of the payment.
     *
     * @remarks
     *
     */
    type?: GETARPaymentTypewithSuccessTypeEnum;
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
     * The date and time when the payment was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
