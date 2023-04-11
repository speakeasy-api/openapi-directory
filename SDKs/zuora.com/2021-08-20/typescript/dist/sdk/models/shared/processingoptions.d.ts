import { SpeakeasyBase } from "../../../internal/utils";
import { BillingOptions } from "./billingoptions";
/**
 * Container for the electronic payment options.
 */
export declare class ProcessingOptionsElectronicPaymentOptions extends SpeakeasyBase {
    /**
     * Specifies an electronic payment method. It can be one that has already been associated with an invoice owner, or an orphan payment method, which is not associated with any invoice owner. For an orphan payment method, this operation will then associate it with the account that this order will be created under.
     */
    paymentMethodId?: string;
}
/**
 * Invoice or Payment.
 */
export declare class ProcessingOptions extends SpeakeasyBase {
    /**
     * The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.
     *
     * @remarks
     *
     * **Note:**
     *   - This field is valid only if the `applyCredit` field is set to `true`.
     *   - If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.
     *   - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `["CreditMemo"]`, only credit memos are used to apply to invoices.
     *
     */
    applicationOrder?: string[];
    /**
     * Whether to automatically apply credit memos or unapplied payments, or both to an invoice.
     *
     * @remarks
     *
     * If the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken.
     *
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    applyCredit?: boolean;
    /**
     * Indicates if any credit balance on a customer's account is automatically applied to invoices. If no value is specified then this field defaults to false. This feature is not available if you have enabled the Invoice Settlement feature.
     */
    applyCreditBalance?: boolean;
    billingOptions?: BillingOptions;
    /**
     * Indicates if the current request needs to collect payments. This value can not be 'true' when 'runBilling' flag is 'false'.
     */
    collectPayment?: boolean;
    /**
     * Container for the electronic payment options.
     */
    electronicPaymentOptions?: ProcessingOptionsElectronicPaymentOptions;
    /**
     * Indicates if the current request needs to generate an invoice. The invoice will be generated against all subscriptions included in this order.
     */
    runBilling?: boolean;
}
