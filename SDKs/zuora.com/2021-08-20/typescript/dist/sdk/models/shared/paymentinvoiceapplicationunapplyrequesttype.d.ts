import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInvoiceApplicationItemUnapplyRequestType } from "./paymentinvoiceapplicationitemunapplyrequesttype";
export declare class PaymentInvoiceApplicationUnapplyRequestType extends SpeakeasyBase {
    /**
     * The amount of the payment that is unapplied from the invoice.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the invoice that the payment is unapplied from.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * Container for invoice items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    items?: PaymentInvoiceApplicationItemUnapplyRequestType[];
}
