import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the invoice.
 *
 * @remarks
 *
 */
export declare enum PostInvoiceResponseStatusEnum {
    Draft = "Draft",
    Posted = "Posted"
}
/**
 * Whether the invoice was transferred to an external accounting system.
 *
 * @remarks
 *
 */
export declare enum PostInvoiceResponseTransferredToAccountingEnum {
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
export declare class PostInvoiceResponse extends SpeakeasyBase {
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
    amount?: string;
    /**
     * The invoice amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: string;
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
     * The date that appears on the invoice being created.
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
    invoiceNumber?: string;
    /**
     * The status of the invoice.
     *
     * @remarks
     *
     */
    status?: PostInvoiceResponseStatusEnum;
    /**
     * The amount of taxation.
     *
     * @remarks
     *
     */
    taxAmount?: string;
    /**
     * The total amount of taxes or VAT for which the customer has an exemption.
     *
     * @remarks
     *
     */
    taxExemptAmount?: string;
    /**
     * Whether the invoice was transferred to an external accounting system.
     *
     * @remarks
     *
     */
    transferredToAccounting?: PostInvoiceResponseTransferredToAccountingEnum;
}
