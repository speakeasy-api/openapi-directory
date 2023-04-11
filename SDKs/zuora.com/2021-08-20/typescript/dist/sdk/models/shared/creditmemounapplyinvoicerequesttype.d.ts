import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyInvoiceItemRequestType } from "./creditmemounapplyinvoiceitemrequesttype";
export declare class CreditMemoUnapplyInvoiceRequestType extends SpeakeasyBase {
    /**
     * The credit memo amount to be unapplied from the invoice.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the invoice that the credit memo is unapplied from.
     *
     * @remarks
     *
     */
    invoiceId: string;
    /**
     * Container for items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     */
    items?: CreditMemoUnapplyInvoiceItemRequestType[];
}
