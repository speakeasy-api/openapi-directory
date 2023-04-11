import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountSummaryPaymentInvoiceType } from "./getaccountsummarypaymentinvoicetype";
export declare class GETAccountSummaryPaymentType extends SpeakeasyBase {
    /**
     * Effective date as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Payment ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Container for paid invoices for this subscription.
     *
     * @remarks
     *
     */
    paidInvoices?: GETAccountSummaryPaymentInvoiceType[];
    /**
     * Payment number.
     *
     * @remarks
     *
     */
    paymentNumber?: string;
    /**
     * Payment type; possible values are: `External`, `Electronic`.
     *
     * @remarks
     *
     */
    paymentType?: string;
    /**
     * Payment status. Possible values are: `Draft`, `Processing`, `Processed`, `Error`, `Voided`, `Canceled`, `Posted`.
     *
     * @remarks
     *
     */
    status?: string;
}
