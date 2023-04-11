import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoRequestType } from "./creditmemounapplydebitmemorequesttype";
import { CreditMemoUnapplyInvoiceRequestType } from "./creditmemounapplyinvoicerequesttype";
export declare class UnapplyCreditMemoType extends SpeakeasyBase {
    /**
     * Container for debit memos that the credit memo is unapplied from. The maximum number of debit memos is 1,000.
     *
     * @remarks
     *
     */
    debitMemos?: CreditMemoUnapplyDebitMemoRequestType[];
    /**
     * The date when the credit memo is unapplied.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for invoices that the credit memo is unapplied from. The maximum number of invoices is 1,000.
     *
     * @remarks
     *
     */
    invoices?: CreditMemoUnapplyInvoiceRequestType[];
}
