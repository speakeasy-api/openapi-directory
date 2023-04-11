import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoRequestType } from "./creditmemoapplydebitmemorequesttype";
import { CreditMemoApplyInvoiceRequestType } from "./creditmemoapplyinvoicerequesttype";
export declare class ApplyCreditMemoType extends SpeakeasyBase {
    /**
     * Container for debit memos that the credit memo is applied to. The maximum number of debit memos is 1,000.
     *
     * @remarks
     *
     */
    debitMemos?: CreditMemoApplyDebitMemoRequestType[];
    /**
     * The date when the credit memo is applied.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for invoices that the credit memo is applied to. The maximum number of invoices is 1,000.
     *
     * @remarks
     *
     */
    invoices?: CreditMemoApplyInvoiceRequestType[];
}
