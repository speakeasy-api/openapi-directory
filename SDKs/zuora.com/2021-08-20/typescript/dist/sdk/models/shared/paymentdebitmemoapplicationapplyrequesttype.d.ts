import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDebitMemoApplicationItemApplyRequestType } from "./paymentdebitmemoapplicationitemapplyrequesttype";
export declare class PaymentDebitMemoApplicationApplyRequestType extends SpeakeasyBase {
    /**
     * The amount that is applied from the payment to the debit memo.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the debit memo that the payment is applied to.
     *
     * @remarks
     *
     */
    debitMemoId?: string;
    /**
     * Container for debit memo items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    items?: PaymentDebitMemoApplicationItemApplyRequestType[];
}
