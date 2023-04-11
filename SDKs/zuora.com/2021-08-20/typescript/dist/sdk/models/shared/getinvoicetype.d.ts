import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of an Invoice object.
 *
 * @remarks
 *
 */
export declare class GETInvoiceType extends SpeakeasyBase {
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
     * Customer account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * Customer account name.
     *
     * @remarks
     *
     */
    accountName?: string;
    /**
     * Customer account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * Amount of the invoice before adjustments, discounts, and similar items.
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * Balance remaining due on the invoice (after adjustments, discounts, etc.)
     *
     * @remarks
     *
     */
    balance?: string;
    /**
     * The REST URL of the invoice PDF file.
     *
     * @remarks
     *
     */
    body?: string;
    /**
     * User ID of the person who created the invoice. If a bill run generated the invoice, then this is the user ID of person who created the bill run.
     *
     * @remarks
     *
     */
    createdBy?: string;
    creditBalanceAdjustmentAmount?: string;
    /**
     * Payment due date as _yyyy-mm-dd_.
     *
     * @remarks
     *
     */
    dueDate?: Date;
    /**
     * Invoice ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Invoice date as _yyyy-mm-dd_
     *
     * @remarks
     *
     */
    invoiceDate?: Date;
    /**
     * URL to retrieve information about all files of a specific invoice if any file exists; otherwise absent. For example, `https://rest.zuora.com/v1/invoices/2c92c095511f5b4401512682dcfd7987/files`. If you want to view the invoice file details, call [Get invoice files](https://www.zuora.com/developer/api-reference/#operation/GET_InvoiceFiles) with the returned URL.
     *
     * @remarks
     *
     * If your tenant was created before Zuora Release 228 (R228), July 2018, the value of this field is an array of invoice file details. For more information about the array, see the response body of [Get invoice files](https://www.zuora.com/developer/api-reference/#operation/GET_InvoiceFiles).
     *
     * Zuora recommends that you use the latest behavior to retrieve invoice information. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/) asking for invoice item and file references to be enabled in the REST API.
     *
     */
    invoiceFiles?: string;
    /**
     * URL to retrieve information about all items of a specific invoice. For example, `https://rest.zuora.com/v1/invoices/2c92c095511f5b4401512682dcfd7987/items`. If you want to view the invoice item details, call [Get invoice items](https://www.zuora.com/developer/api-reference/#operation/GET_InvoiceItems) with the returned URL.
     *
     * @remarks
     *
     * If your tenant was created before Zuora Release 228 (R228), July 2018, the value of this field is an array of invoice item details. For more information about the array, see the response body of [Get invoice items](https://www.zuora.com/developer/api-reference/#operation/GET_InvoiceItems).
     *
     * Zuora recommends that you use the latest behavior to retrieve invoice information. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/) asking for invoice item and file references to be enabled in the REST API.
     *
     */
    invoiceItems?: string;
    /**
     * Unique invoice ID, returned as a string.
     *
     * @remarks
     *
     */
    invoiceNumber?: string;
    /**
     * Date through which charges on this invoice are calculated, as _yyyy-mm-dd_.
     *
     * @remarks
     *
     */
    invoiceTargetDate?: Date;
    /**
     * Whether the invoice is reversed.
     *
     * @remarks
     *
     */
    reversed?: boolean;
    /**
     * Status of the invoice in the system - not the payment status, but the status of the invoice itself. Possible values are: `Posted`, `Draft`, `Canceled`, `Error`.
     *
     * @remarks
     *
     */
    status?: string;
}
