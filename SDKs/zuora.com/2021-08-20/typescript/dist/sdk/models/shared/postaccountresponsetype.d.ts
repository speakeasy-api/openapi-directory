import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTAccountResponseType extends SpeakeasyBase {
    /**
     * Auto-generated account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * Account number.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * The ID of the bill-to contact.
     *
     * @remarks
     *
     */
    billToContactId?: string;
    /**
     * Contracted monthly recurring revenue of the subscription.
     *
     * @remarks
     *
     */
    contractedMrr?: string;
    /**
     * The credit memo ID, if a credit memo is generated during the subscription process.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemoId?: string;
    /**
     * ID of the invoice generated at account creation, if applicable.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * Amount collected on the invoice generated at account creation, if applicable.
     *
     * @remarks
     *
     */
    paidAmount?: string;
    /**
     * ID of the payment collected on the invoice generated at account creation, if applicable.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * ID of the payment method that was set up at account creation, which automatically becomes the default payment method for this account.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The ID of the sold-to contact.
     *
     * @remarks
     *
     */
    soldToContactId?: string;
    /**
     * ID of the subscription that was set up at account creation, if applicable.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * Number of the subscription that was set up at account creation, if applicable.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Total contracted value of the subscription.
     *
     * @remarks
     *
     */
    totalContractedValue?: string;
}
