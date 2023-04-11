import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyInvoiceItemRequestType } from "./creditmemoapplyinvoiceitemrequesttype";
export declare class CreditMemoApplyInvoiceRequestType extends SpeakeasyBase {
    /**
     * The credit memo amount to be applied to the invoice.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the invoice that the credit memo is applied to.
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
    items?: CreditMemoApplyInvoiceItemRequestType[];
}
