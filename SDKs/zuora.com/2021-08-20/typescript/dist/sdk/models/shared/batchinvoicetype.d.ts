import { SpeakeasyBase } from "../../../internal/utils";
import { PutInvoiceItemType } from "./putinvoiceitemtype";
/**
 * Whether the invoice was transferred to an external accounting system.
 *
 * @remarks
 *
 */
export declare enum BatchInvoiceTypeTransferredToAccountingEnum {
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
export declare class BatchInvoiceType extends SpeakeasyBase {
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
     * Whether invoices are automatically picked up for processing in the corresponding payment run.
     *
     * @remarks
     *
     * By default, invoices are automatically picked up for processing in the corresponding payment run.
     *
     */
    autoPay?: boolean;
    /**
     * Additional information related to the invoice that a Zuora user added to the invoice.
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
     * The ID of the invoice to be updated.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The new invoice date of the invoice. The new invoice date cannot fall in a closed accounting period.
     *
     * @remarks
     *
     * You can only specify `invoiceDate` or `dueDate` in one request. Otherwise, an error occurs.
     *
     */
    invoiceDate?: Date;
    /**
     * Container for invoice items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     * **Note:** Invoice items can only be updated if you have Unified Invoicing is enabled and the invoice is a standalone invoice.
     *
     */
    invoiceItems?: PutInvoiceItemType[];
    /**
     * Whether the invoice was transferred to an external accounting system.
     *
     * @remarks
     *
     */
    transferredToAccounting?: BatchInvoiceTypeTransferredToAccountingEnum;
}
