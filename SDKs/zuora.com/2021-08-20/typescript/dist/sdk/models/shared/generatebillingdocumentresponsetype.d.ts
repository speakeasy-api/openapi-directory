import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoResponseType } from "./creditmemoresponsetype";
import { InvoiceResponseType } from "./invoiceresponsetype";
export declare class GenerateBillingDocumentResponseType extends SpeakeasyBase {
    /**
     * Container for generated credit memos.
     *
     * @remarks
     *
     * **Note:** This container is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemos?: CreditMemoResponseType[];
    /**
     * Container for generated invoics.
     *
     * @remarks
     *
     */
    invoices?: InvoiceResponseType[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
