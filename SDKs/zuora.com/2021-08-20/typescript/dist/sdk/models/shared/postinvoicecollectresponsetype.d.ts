import { SpeakeasyBase } from "../../../internal/utils";
import { POSTInvoiceCollectCreditMemosType } from "./postinvoicecollectcreditmemostype";
import { POSTInvoiceCollectInvoicesType } from "./postinvoicecollectinvoicestype";
export declare class POSTInvoiceCollectResponseType extends SpeakeasyBase {
    /**
     * Payment amount applied.
     *
     * @remarks
     *
     */
    amountCollected?: string;
    /**
     * Information on one or more credit memos associated with this operation.
     *
     * @remarks
     *
     */
    creditMemos?: POSTInvoiceCollectCreditMemosType[];
    /**
     * Information on one or more invoices associated with this operation.
     *
     * @remarks
     *
     */
    invoices?: POSTInvoiceCollectInvoicesType[];
    /**
     * Payment ID.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
