import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the credit memo.
 *
 * @remarks
 *
 */
export declare enum GETCreditMemoTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error",
    PendingForTax = "PendingForTax",
    Generating = "Generating",
    CancelInProgress = "CancelInProgress"
}
/**
 * The status of tax calculation related to the credit memo.
 *
 * @remarks
 *
 * **Note**: This field is only applicable to tax calculation by third-party tax engines.
 *
 */
export declare enum GETCreditMemoTypeTaxStatusEnum {
    Complete = "Complete",
    Error = "Error"
}
/**
 * Whether the credit memo was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum GETCreditMemoTypeTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Credit Memo object.
 *
 * @remarks
 *
 */
export declare class GETCreditMemoType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the credit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
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
     * Date when the credit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
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
     * The ID of the customer account associated with the credit memo.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the credit memo.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The applied amount of the credit memo.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * Whether the credit memo automatically applies to the invoice upon posting.
     *
     * @remarks
     *
     */
    autoApplyUponPosting?: boolean;
    /**
     * The ID of the Zuora user who cancelled the credit memo.
     *
     * @remarks
     *
     */
    cancelledById?: string;
    /**
     * The date and time when the credit memo was cancelled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Comments about the credit memo.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the credit memo.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the credit memo was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The date when the credit memo takes effect, in `yyyy-mm-dd` format. For example, 2017-05-20.
     *
     * @remarks
     *
     */
    creditMemoDate?: Date;
    /**
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Whether the credit memo is excluded from the rule of automatically applying credit memos to invoices.
     *
     * @remarks
     *
     */
    excludeFromAutoApplyRules?: boolean;
    /**
     * The unique ID of the credit memo.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the latest PDF file generated for the credit memo.
     *
     * @remarks
     *
     */
    latestPDFFileId?: string;
    /**
     * The unique identification number of the credit memo.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The ID of the Zuora user who posted the credit memo.
     *
     * @remarks
     *
     */
    postedById?: string;
    /**
     * The date and time when the credit memo was posted, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    postedOn?: Date;
    /**
     * A code identifying the reason for the transaction. The value must be an existing reason code or empty.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The ID of a referred invoice.
     *
     * @remarks
     *
     */
    referredInvoiceId?: string;
    /**
     * The amount of the refund on the credit memo.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * The source of the credit memo.
     *
     * @remarks
     *
     * Possible values:
     * - `BillRun`: The credit memo is generated by a bill run.
     * - `API`: The credit memo is created by calling the [Invoice and collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment) operation.
     * - `ApiSubscribe`: The credit memo is created by calling the [Create subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription) and [Create account](https://www.zuora.com/developer/api-reference/#operation/POST_Account) operation.
     * - `ApiAmend`: The credit memo is created by calling the [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) operation.
     * - `AdhocFromPrpc`: The credit memo is created from a product rate plan charge through the Zuora UI or by calling the [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc) operation.
     * - `AdhocFromInvoice`: The credit memo is created from an invoice or created by reversing an invoice. You can create a credit memo from an invoice through the Zuora UI or by calling the [Create a credit memo from an invoice](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromInvoice) operation. You can create a credit memo by reversing an invoice through the Zuora UI or by calling the [Reverse an invoice](https://www.zuora.com/developer/api-reference/#operation/PUT_ReverseInvoice) operation.
     *
     */
    source?: string;
    /**
     * The ID of the credit memo source.
     *
     * @remarks
     *
     * If a credit memo is generated from a bill run, the value is the number of the corresponding bill run. Otherwise, the value is `null`.
     *
     */
    sourceId?: string;
    /**
     * The status of the credit memo.
     *
     * @remarks
     *
     */
    status?: GETCreditMemoTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * The target date for the credit memo, in `yyyy-mm-dd` format. For example, 2017-07-20.
     *
     * @remarks
     *
     */
    targetDate?: Date;
    /**
     * The amount of taxation.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * The message about the status of tax calculation related to the credit memo. If tax calculation fails in one credit memo, this field displays the reason for the failure.
     *
     * @remarks
     *
     */
    taxMessage?: string;
    /**
     * The status of tax calculation related to the credit memo.
     *
     * @remarks
     *
     * **Note**: This field is only applicable to tax calculation by third-party tax engines.
     *
     */
    taxStatus?: GETCreditMemoTypeTaxStatusEnum;
    /**
     * The total amount of taxes or VAT for which the customer has an exemption.
     *
     * @remarks
     *
     */
    totalTaxExemptAmount?: number;
    /**
     * Whether the credit memo was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: GETCreditMemoTypeTransferredToAccountingEnum;
    /**
     * The unapplied amount of the credit memo.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
    /**
     * The ID of the Zuora user who last updated the credit memo.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the credit memo was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
