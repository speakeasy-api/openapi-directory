import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Refund object.
 *
 * @remarks
 *
 */
export declare class ProxyGetRefund extends SpeakeasyBase {
    /**
     *  The ID of the account associated with this refund. Specify a value for this field only if you're creating an electronic non-referenced refund. Don't specify a value for any other type of refund; Zuora associates the refund automatically with the account from the associated payment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid account ID
     */
    accountId?: string;
    /**
     *  The accounting code for the payment or invoice line item that the refund applies to. If there is no accounting code, then this value is null. Accounting codes group transactions that contain similar accounting attributes.
     *
     * @remarks
     * **Character limit**: 50 **Values**: automatically generated
     */
    accountingCode?: string;
    /**
     *  The amount of the refund. The amount can't exceed the amount of the associated payment. If the original payment was applied to a single invoice, you can create a partial refund by specifying an amount in this field or through the UI. If the payment was applied to multiple invoices, you can create a partial refund by using the `RefundInvoicePaymentData` field of this operation or through the UI.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount?: number;
    /**
     *  The date the refund was cancelled.
     *
     * @remarks
     * **Values**: automatically generated
     */
    cancelledOn?: Date;
    /**
     *  Use this field to record comments about the refund.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    comment?: string;
    /**
     *  The ID of the Zuora user who created the `Refund` object.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the `Refund` object was created.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The gateway that processed the original payment. Zuora uses this same gateway for the corresponding refund. If this payment gateway is no longer active, then the electronic refund fails. A gateway is an online service provider that connects an online shopping cart to a payment processor.
     *
     * @remarks
     * **Values**: automatically inherited from the `Payment` object
     */
    gateway?: string;
    /**
     *  The message returned from the payment gateway for the refund. This message is gateway-dependent.
     *
     * @remarks
     * **Character limit**: 500 **Values**: automatically generated
     */
    gatewayResponse?: string;
    /**
     *  The code returned from the payment gateway for the payment. This code is gateway-dependent.
     *
     * @remarks
     * **Character limit**: 20 **System****Values**: automatically generated
     */
    gatewayResponseCode?: string;
    /**
     *  The status of the payment in the gateway.
     *
     * @remarks
     * **Character limit**: 19 **Values**: automatically generated
     */
    gatewayState?: string;
    /**
     * Object identifier.
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
     * Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     *  The date when a payment was marked and waiting for batch submission to the payment process. **Character limit**: 29 **Values**: automatically generated
     */
    markedForSubmissionOn?: Date;
    /**
     *  Indicates how an external refund was issued to a customer. This field is required for an external refund. You can issue an external refund on an electronic payment. **Character limit**: 30 **Values**:
     *
     * @remarks
     *
     * - `ACH`
     * - `Cash`
     * - `Check`
     * - `CreditCard`
     * - `Other`
     * - `PayPal`
     * - `WireTransfer`
     * - `DebitCard`
     * - `CreditCardReferenceTransaction`
     *
     */
    methodType?: string;
    /**
     * Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    originNS?: string;
    /**
     *  The unique ID of the payment associated with this refund. Don't specify a value for this field if you're creating an electronic non-referenced refund.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid payment ID
     */
    paymentId?: any;
    /**
     *  The unique ID of the payment method that the customer used to make the payment. Specify a value for this field only if you're creating an electronic non-referenced refund.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid payment method ID
     */
    paymentMethodId?: string;
    /**
     *  The unique ID of the payment method snapshot which is a copy of the particular Payment Method used in a transaction.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid payment method snapshot ID
     */
    paymentMethodSnapshotId?: string;
    /**
     *  A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     * **Character limit**: 32 **V****alues**: a valid reason code
     */
    reasonCode?: string;
    /**
     *  The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.
     *
     * @remarks
     * **Character limit**: 60 **Values**: a string of 60 characters or fewer
     */
    referenceID?: string;
    /**
     *  The date of the refund, in `yyyy-mm-dd` format. The date of the refund cannot be before the payment date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds.
     *
     * @remarks
     * **Character limit**: 29
     */
    refundDate?: Date;
    /**
     *  The unique identifier of the refund.
     *
     * @remarks
     * **Character limit**: 50 **Values**: automatically generated
     */
    refundNumber?: string;
    /**
     *  The date and time when the refund was issued.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    refundTransactionTime?: Date;
    /**
     *  The transaction ID returned by the payment gateway if there is an additional transaction for the payment. Use this field to reconcile payments between your gateway and Zuora Payments.
     *
     * @remarks
     * **Character limit**: 60 **Values**: a string of 60 characters or fewer
     */
    secondRefundReferenceId?: string;
    /**
     *  The date when the payment was settled in the payment processor. This field is used by the Spectrum gateway only and not applicable to other gateways.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    settledOn?: Date;
    /**
     *  A payment gateway-specific field that maps Zuora to other gateways . **Character limit**: 35 **Values**:
     *
     * @remarks
     *
     * - 3-byte company identifier &quot;*&quot; 18-byte descriptor
     * - 7-byte company identifier &quot;*&quot; 14-byte descriptor
     * - 12-byte company identifier &quot;*&quot; 9-byte descriptor
     *
     */
    softDescriptor?: string;
    /**
     *  A payment gateway-specific field that maps Zuora to other gateways . **Character limit**: 20 **Values**:
     *
     * @remarks
     *
     * - Customer service phone number formatted as: `NNN-NNN-NNNN` or `NNN-AAAAAAA`
     * - URL (non-e-Commerce): Transactions sent with a URL do not qualify for the best interchange rate
     * - Email address
     *
     */
    softDescriptorPhone?: string;
    /**
     *  Specifies whether the refund is a refund payment or a credit balance. This field is required when creating an non-referenced refund. If you creating an non-referenced refund, then set this value to `CreditBalance`.
     *
     * @remarks
     * **Character limit**: 13 **Values**:
     *
     * - `Payment`
     * - `CreditBalance`
     *
     */
    sourceType?: string;
    /**
     *  The status of the refund.
     *
     * @remarks
     * **Character limit**: 10 **Values**: automatically generated:
     *
     * - `Canceled`
     * - `Error`
     * - `Processed`
     * - `Processing`
     *
     */
    status?: string;
    /**
     *  The date when the payment was submitted.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    submittedOn?: Date;
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
     *  Specifies whether or not the object has been transferred to an external accounting system. Use this field for integrations with accounting systems such as NetSuite.
     *
     * @remarks
     * **Character limit**: 10 **Values**: automatically generated:
     *
     * - `Processing`
     * - `Yes`
     * - `Error`
     * - `Ignore`
     *
     */
    transferredToAccounting?: string;
    /**
     *  Specifies if the refund is electronic or external.
     *
     * @remarks
     * **Character limit**: 10 **Values**:
     *
     * - `Electronic`
     * - External
     *
     */
    type?: string;
    /**
     *  The ID of the last user to update the object.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the object was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
