import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the invoice.
 *
 * @remarks
 *
 */
export declare enum PutInvoiceResponseTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error"
}
/**
 * Whether the invoice was transferred to an external accounting system.
 *
 * @remarks
 *
 */
export declare enum PutInvoiceResponseTypeTransferredToAccountingEnum {
    Processing = "Processing",
    Yes = "Yes",
    Error = "Error",
    Ignore = "Ignore"
}
/**
 * Container for custom fields of an Invoice object.
 *
 * @remarks
 *
 */
export declare class PutInvoiceResponseType extends SpeakeasyBase {
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the invoice's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * Date when the invoice was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * The ID of the customer account associated with the invoice.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The total amount of the invoice.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Whether invoices are automatically picked up for processing in the corresponding payment run.
     *
     * @remarks
     *
     */
    autoPay?: boolean;
    /**
     * The balance of the invoice.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * The ID of the Zuora user who cancelled the invoice.
     *
     * @remarks
     *
     */
    cancelledById?: string;
    /**
     * The date and time when the invoice was cancelled, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    cancelledOn?: Date;
    /**
     * Comments about the invoice.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the invoice.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the invoice was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * **Note:** This filed is only available if you have the Credit Balance feature enabled and the Invoice Settlement feature disabled.
     *
     * @remarks
     *
     * The currency amount of the adjustment applied to the customer's credit balance.
     *
     */
    creditBalanceAdjustmentAmount?: number;
    /**
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The date by which the payment for this invoice is due.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * The unique ID of the invoice.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The date on which to generate the invoice.
     *
     * @remarks
     *
     */
    invoiceDate?: Date;
    /**
     * The unique identification number of the invoice.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The ID of the Zuora user who posted the invoice.
     *
     * @remarks
     *
     */
    postedById?: string;
    /**
     * The date and time when the invoice was posted, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    postedOn?: Date;
    /**
     * The status of the invoice.
     *
     * @remarks
     *
     */
    status?: PutInvoiceResponseTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The target date for the invoice, in `yyyy-mm-dd` format. For example, 2017-07-20.
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
     * The total amount of taxes or VAT, for which the customer has an exemption.
     *
     * @remarks
     *
     */
    totalTaxExemptAmount?: number;
    /**
     * Whether the invoice was transferred to an external accounting system.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PutInvoiceResponseTypeTransferredToAccountingEnum;
    /**
     * The ID of the Zuora user who last updated the invoice.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the invoice was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
