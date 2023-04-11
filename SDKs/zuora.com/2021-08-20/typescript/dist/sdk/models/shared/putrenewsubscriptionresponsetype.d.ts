import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTRenewSubscriptionResponseType extends SpeakeasyBase {
    /**
     * The credit memo ID, if a credit memo is generated during the subscription process.
     *
     * @remarks
     *
     * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemoId?: string;
    /**
     * Invoice ID, if one is generated.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * Payment amount, if payment is collected.
     *
     * @remarks
     *
     */
    paidAmount?: number;
    /**
     * Payment ID, if payment is collected.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Date the new subscription term ends, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    termEndDate?: Date;
    /**
     * Date the new subscription term begins, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    termStartDate?: Date;
    /**
     * Change in the subscription monthly recurring revenue as a result of the update. For a renewal, this is the MRR of the subscription in the new term.
     *
     * @remarks
     *
     */
    totalDeltaMrr?: number;
    /**
     * Change in the total contracted value of the subscription as a result of the update. For a renewal, this is the TCV of the subscription in the new term.
     *
     * @remarks
     *
     */
    totalDeltaTcv?: number;
}
