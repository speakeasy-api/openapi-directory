import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the debit memo.
 *
 * @remarks
 *
 */
export declare enum GETDebitMemoTypewithSuccessStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error",
    PendingForTax = "PendingForTax",
    Generating = "Generating",
    CancelInProgress = "CancelInProgress"
}
/**
 * The status of tax calculation related to the debit memo.
 *
 * @remarks
 *
 * **Note**: This field is only applicable to tax calculation by third-party tax engines.
 *
 */
export declare enum GETDebitMemoTypewithSuccessTaxStatusEnum {
    Complete = "Complete",
    Error = "Error"
}
/**
 * Whether the debit memo was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
 *
 * @remarks
 *
 */
export declare enum GETDebitMemoTypewithSuccessTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    No = "No",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of a Debit Memo object.
 *
 * @remarks
 *
 */
export declare class GETDebitMemoTypewithSuccess extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the debit memo's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Date when the debit memo was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * The ID of the customer account associated with the debit memo.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the debit memo.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Whether debit memos are automatically picked up for processing in the corresponding payment run.
     *
     * @remarks
     *
     * By default, debit memos are automatically picked up for processing in the corresponding payment run.
     *
     */
    autoPay?: boolean;
    /**
     * The balance of the debit memo.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * The applied amount of the debit memo.
     *
     * @remarks
     *
     */
    beAppliedAmount?: number;
    /**
     * The ID of the Zuora user who cancelled the debit memo.
     *
     * @remarks
     *
     */
    cancelledById?: string;
    /**
     * The date and time when the debit memo was cancelled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Comments about the debit memo.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the debit memo.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the debit memo was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The date when the debit memo takes effect, in `yyyy-mm-dd` format. For example, 2017-05-20.
     *
     * @remarks
     *
     */
    debitMemoDate?: Date;
    /**
     * The date by which the payment for the debit memo is due, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * The unique ID of the debit memo.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the latest PDF file generated for the debit memo.
     *
     * @remarks
     *
     */
    latestPDFFileId?: string;
    /**
     * The unique identification number of the debit memo.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The ID of the Zuora user who posted the debit memo.
     *
     * @remarks
     *
     */
    postedById?: string;
    /**
     * The date and time when the debit memo was posted, in `yyyy-mm-dd hh:mm:ss` format.
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
     * The status of the debit memo.
     *
     * @remarks
     *
     */
    status?: GETDebitMemoTypewithSuccessStatusEnum;
    /**
     * The target date for the debit memo, in `yyyy-mm-dd` format. For example, 2017-07-20.
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
     * The message about the status of tax calculation related to the debit memo. If tax calculation fails in one debit memo, this field displays the reason for the failure.
     *
     * @remarks
     *
     */
    taxMessage?: string;
    /**
     * The status of tax calculation related to the debit memo.
     *
     * @remarks
     *
     * **Note**: This field is only applicable to tax calculation by third-party tax engines.
     *
     */
    taxStatus?: GETDebitMemoTypewithSuccessTaxStatusEnum;
    /**
     * The total amount of taxes or VAT for which the customer has an exemption.
     *
     * @remarks
     *
     */
    totalTaxExemptAmount?: number;
    /**
     * Whether the debit memo was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.
     *
     * @remarks
     *
     */
    transferredToAccounting?: GETDebitMemoTypewithSuccessTransferredToAccountingEnum;
    /**
     * The ID of the Zuora user who last updated the debit memo.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the debit memo was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:31:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
