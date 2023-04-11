import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the credit balance adjustment's transfer to an external accounting system, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum ProxyGetCreditBalanceAdjustmentTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Credit Balance Adjustment object.
 *
 * @remarks
 *
 */
export declare class ProxyGetCreditBalanceAdjustment extends SpeakeasyBase {
    /**
     *  The account ID of the credit balance's account. Zuora generates this value from the source transaction.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated from:
     *
     * - CreditBalanceAdjustment.SourceTransactionId or
     * - CreditBalanceAdjustment.SourceTransactionNumber
     *
     */
    accountId?: string;
    /**
     *  The Chart of Accounts
     */
    accountingCode?: string;
    /**
     *  The date when the credit balance adjustment is applied.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    adjustmentDate?: Date;
    /**
     *  The amount of the adjustment.
     *
     * @remarks
     * **Character limit**: 16 **Values**: a valid currency amount
     */
    amount?: number;
    /**
     *  The date when the credit balance adjustment was canceled.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    cancelledOn?: Date;
    /**
     *  Use this field to record comments about the credit balance adjustment.
     *
     * @remarks
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    comment?: string;
    /**
     *  The user ID of the person who created the credit balance adjustment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date when the credit balance adjustmentwas generated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    createdDate?: Date;
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
     * Status of the credit balance adjustment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     *  A unique identifier for the credit balance adjustment. Zuora generates this number in the format, <em>CBA-xxxxxxxx</em>, such as CBA-00375919.
     *
     * @remarks
     * **Character limit**: 255 **Values**: automatically generated
     */
    number?: string;
    /**
     *  A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     * **Character limit**: 32 **Values**: a valid reason code
     */
    reasonCode?: string;
    /**
     *  The ID of the payment that the credit balance adjustment is for.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    referenceId?: string;
    /**
     *  The ID of the object that the credit balance adjustment is applied to. You must specify a value for either the `SourceTransactionId` field or the `SourceTransactionNumber` field.
     *
     * @remarks
     * **Character limit**: 32 **Values**: one of the following:
     *
     * - InvoiceId
     * - PaymentId
     * - RefundId
     *
     */
    sourceTransactionId?: string;
    /**
     *  The number of the object that the credit balance adjustment is applied to. You must specify a value for either the `SourceTransactionId` field or the `SourceTransactionNumber` field.
     *
     * @remarks
     * **Character limit**: 50 **Values**: one of the following:
     *
     * - InvoiceNumber
     * - PaymentNumber
     * - RefundNumber
     *
     */
    sourceTransactionNumber?: string;
    /**
     *  The source of the credit balance adjustment.
     *
     * @remarks
     * **Character limit**: **Values**: automatically generated; one of the following:
     *
     * - Invoice
     * - Payment
     * - Refund
     *
     */
    sourceTransactionType?: string;
    /**
     *  The status of the credit balance adjustment.
     *
     * @remarks
     * **Character limit**: 9 **Values**: automatically generated; one of the following:
     *
     * - Processed
     * - Canceled
     *
     */
    status?: string;
    /**
     * Date when the credit balance adjustment was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Status of the credit balance adjustment's transfer to an external accounting system, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: ProxyGetCreditBalanceAdjustmentTransferredToAccountingEnum;
    /**
     * Create Query Filter
     */
    type?: string;
    /**
     *  The ID of the user who last updated the credit balance adjustment.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the credit balance adjustment was last updated.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    updatedDate?: Date;
}
