import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoEntityPrefix } from "./creditmemoentityprefix";
import { DebitMemoEntityPrefix } from "./debitmemoentityprefix";
import { InvoiceEntityPrefix } from "./invoiceentityprefix";
import { PaymentEntityPrefix } from "./paymententityprefix";
import { RefundEntityPrefix } from "./refundentityprefix";
export declare class GETSequenceSetResponse extends SpeakeasyBase {
    /**
     * Container for the prefix and starting document number of credit memos.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemo?: CreditMemoEntityPrefix;
    /**
     * Container for the prefix and starting document number of debit memos.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    debitMemo?: DebitMemoEntityPrefix;
    /**
     * The unique ID of the sequence set. For example, 402892c74c9193cd014c96bbe7c101f9.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Container for the prefix and starting document number of invoices.
     *
     * @remarks
     *
     */
    invoice?: InvoiceEntityPrefix;
    /**
     * The name of the sequence set.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Container for the prefix and starting number of payments.
     *
     * @remarks
     *
     */
    payment?: PaymentEntityPrefix;
    /**
     * Container for the prefix and starting number of refunds.
     *
     * @remarks
     *
     */
    refund?: RefundEntityPrefix;
}
