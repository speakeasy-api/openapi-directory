import { SpeakeasyBase } from "../../../internal/utils";
import { PostInvoiceItemType } from "./postinvoiceitemtype";
/**
 * The status of invoice. By default, the invoice status is Draft.
 *
 * @remarks
 *
 * When creating an invoice, if you set this field to `Posted`, the invoice is created and posted directly.
 *
 */
export declare enum PostInvoiceTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted"
}
export declare enum PostInvoiceTypeTransferredToAccountingEnum {
    Processing = "Processing",
    Error = "Error",
    Ignore = "Ignore",
    True = "true",
    False = "false"
}
/**
 * Container for custom fields of an Invoice object.
 *
 * @remarks
 *
 */
export declare class PostInvoiceType extends SpeakeasyBase {
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
     * The ID of the account associated with the invoice.
     *
     * @remarks
     *
     */
    accountId: string;
    /**
     * Whether invoices are automatically picked up for processing in the corresponding payment run.
     *
     * @remarks
     *
     */
    autoPay?: boolean;
    /**
     * Comments about the invoice.
     *
     * @remarks
     *
     */
    comments?: string;
    /**
     * The date by which the payment for this invoice is due, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * The date that appears on the invoice being created, in `yyyy-mm-dd` format. The value cannot fall in a closed accounting period.
     *
     * @remarks
     *
     */
    invoiceDate: Date;
    /**
     * Container for invoice items. The maximum number of invoice items is 1,000.
     *
     * @remarks
     *
     */
    invoiceItems?: PostInvoiceItemType[];
    /**
     * The status of invoice. By default, the invoice status is Draft.
     *
     * @remarks
     *
     * When creating an invoice, if you set this field to `Posted`, the invoice is created and posted directly.
     *
     */
    status?: PostInvoiceTypeStatusEnum;
    transferredToAccounting?: PostInvoiceTypeTransferredToAccountingEnum;
}
