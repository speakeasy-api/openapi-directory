import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationApplyRequestType } from "./paymentdebitmemoapplicationapplyrequesttype";
import { PaymentInvoiceApplicationApplyRequestType } from "./paymentinvoiceapplicationapplyrequesttype";
export declare class ApplyPaymentType extends SpeakeasyBase {
    /**
     * Container for debit memos. The maximum number of debit memos is 1,000.
     *
     * @remarks
     *
     */
    debitMemos?: PaymentDebitMemoApplicationApplyRequestType[];
    /**
     * The date when the payment application takes effect, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    effectiveDate?: Date;
    /**
     * Container for invoices. The maximum number of invoices is 1,000.
     *
     * @remarks
     *
     */
    invoices?: PaymentInvoiceApplicationApplyRequestType[];
}
