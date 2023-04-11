import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETAccountSummaryInvoiceType extends SpeakeasyBase {
    /**
     * Invoice amount before adjustments, discounts, and similar items.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Balance due on the invoice.
     *
     * @remarks
     *
     */
    balance?: string;
    /**
     * Due date as `yyyy-mm-dd`.
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
     * Invoice date as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    invoiceDate?: Date;
    /**
     * Invoice number.
     *
     * @remarks
     *
     */
    invoiceNumber?: string;
    /**
     * Invoice status - not the payment status of the invoice, just the status of the invoice itself. Possible values are: `Posted`, `Draft`, `Canceled`, `Error`.
     *
     * @remarks
     *
     */
    status?: string;
}
