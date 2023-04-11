import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationUnapplyRequestType } from "./paymentdebitmemoapplicationunapplyrequesttype";
import { PaymentInvoiceApplicationUnapplyRequestType } from "./paymentinvoiceapplicationunapplyrequesttype";
export declare class UnapplyPaymentType extends SpeakeasyBase {
    /**
     * Container for debit memos. The maximum number of debit memos is 1,000.
     *
     * @remarks
     *
     */
    debitMemos?: PaymentDebitMemoApplicationUnapplyRequestType[];
    /**
     * The date when the payment is unapplied, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for invoices. The maximum number of invoice is 1,000.
     *
     * @remarks
     *
     */
    invoices?: PaymentInvoiceApplicationUnapplyRequestType[];
}
