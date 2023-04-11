import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountBillingInvoiceRequest extends SpeakeasyBase {
    /**
     * The account ID.
     */
    accountId: string;
    /**
     * The invoice ID.
     */
    invoiceId: string;
}
export declare class GetAccountBillingInvoice200ApplicationXMLInvoiceItems extends SpeakeasyBase {
    /**
     * Description for the charge.
     */
    chargeName?: string;
    /**
     * Identifier for the charge.
     */
    chargeNumber?: string;
    /**
     * Charge type.
     */
    chargeType?: string;
    /**
     * Billing end date.
     */
    endDate?: Date;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Billing start date.
     */
    startDate?: Date;
    /**
     * Tax amount.
     */
    taxAmount?: number;
    /**
     * Total amount.
     */
    totalAmount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account billing invoice information returned.
 */
export declare class GetAccountBillingInvoice200ApplicationXML extends SpeakeasyBase {
    /**
     * The remaining balance of the invoice after all payments, adjustments, and refunds are applied.
     *
     * @remarks
     *
     *
     */
    balance?: number;
    /**
     * Billing currency.
     */
    currency?: string;
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
    invoiceItems?: GetAccountBillingInvoice200ApplicationXMLInvoiceItems[];
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
export declare class GetAccountBillingInvoice200ApplicationJSONInvoiceItems extends SpeakeasyBase {
    /**
     * Description for the charge.
     */
    chargeName?: string;
    /**
     * Identifier for the charge.
     */
    chargeNumber?: string;
    /**
     * Charge type.
     */
    chargeType?: string;
    /**
     * Billing end date.
     */
    endDate?: Date;
    /**
     * Quantity.
     */
    quantity?: number;
    /**
     * Billing start date.
     */
    startDate?: Date;
    /**
     * Tax amount.
     */
    taxAmount?: number;
    /**
     * Total amount.
     */
    totalAmount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Account billing invoice information returned.
 */
export declare class GetAccountBillingInvoice200ApplicationJSON extends SpeakeasyBase {
    /**
     * The remaining balance of the invoice after all payments, adjustments, and refunds are applied.
     *
     * @remarks
     *
     *
     */
    balance?: number;
    /**
     * Billing currency.
     */
    currency?: string;
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
    invoiceItems?: GetAccountBillingInvoice200ApplicationJSONInvoiceItems[];
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
export declare class GetAccountBillingInvoiceResponse extends SpeakeasyBase {
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
    getAccountBillingInvoice200ApplicationJSONObject?: GetAccountBillingInvoice200ApplicationJSON;
}
