import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountBillingInvoicesRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
    /**
     * Start date for the invoice query in `yyyy-mm-dd` format. The date range defined by the “from” and “to” parameters should not exceed one year. The range defined should fall within the past three years.
     *
     * @remarks
     *
     */
    from?: Date;
    /**
     * End date for the invoice query in `yyyy-mm-dd` format
     */
    to?: Date;
}
export declare class AccountBillingInvoices200ApplicationXMLInvoices extends SpeakeasyBase {
    /**
     * The remaining balance of the invoice after all payments, adjustments, and refunds are applied.
     *
     * @remarks
     *
     *
     */
    balance?: number;
    /**
     * The date by which the payment for this invoice is due.
     *
     * @remarks
     *
     *
     */
    dueDate?: string;
    /**
     * Unique identifier of the invoice.
     */
    id?: string;
    /**
     * The date when the invoice was generated.
     *
     * @remarks
     *
     */
    invoiceDate?: string;
    /**
     * Invoice number.
     */
    invoiceNumber?: string;
    /**
     * Status of the invoice.
     */
    status?: string;
    /**
     * This date is used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in the invoice.
     *
     * @remarks
     *
     */
    targetDate?: string;
    /**
     * Tax amount.
     */
    taxAmount?: number;
    /**
     * Total invoice amount.
     */
    totalAmount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account billing invoice information returned.
 */
export declare class AccountBillingInvoices200ApplicationXML extends SpeakeasyBase {
    /**
     * Currency used in the invoice.
     */
    currency?: string;
    invoices?: AccountBillingInvoices200ApplicationXMLInvoices[];
}
export declare class AccountBillingInvoices200ApplicationJSONInvoices extends SpeakeasyBase {
    /**
     * The remaining balance of the invoice after all payments, adjustments, and refunds are applied.
     *
     * @remarks
     *
     *
     */
    balance?: number;
    /**
     * The date by which the payment for this invoice is due.
     *
     * @remarks
     *
     *
     */
    dueDate?: string;
    /**
     * Unique identifier of the invoice.
     */
    id?: string;
    /**
     * The date when the invoice was generated.
     *
     * @remarks
     *
     */
    invoiceDate?: string;
    /**
     * Invoice number.
     */
    invoiceNumber?: string;
    /**
     * Status of the invoice.
     */
    status?: string;
    /**
     * This date is used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in the invoice.
     *
     * @remarks
     *
     */
    targetDate?: string;
    /**
     * Tax amount.
     */
    taxAmount?: number;
    /**
     * Total invoice amount.
     */
    totalAmount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account billing invoice information returned.
 */
export declare class AccountBillingInvoices200ApplicationJSON extends SpeakeasyBase {
    /**
     * Currency used in the invoice.
     */
    currency?: string;
    invoices?: AccountBillingInvoices200ApplicationJSONInvoices[];
}
export declare class AccountBillingInvoicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account billing invoice information returned.
     */
    accountBillingInvoices200ApplicationJSONObject?: AccountBillingInvoices200ApplicationJSON;
}
