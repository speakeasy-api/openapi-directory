import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the prefix and starting document number of debit memos.
 *
 * @remarks
 *
 * **Note:** This field is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
 *
 */
export declare class DebitMemoEntityPrefix extends SpeakeasyBase {
    /**
     * The prefix of debit memos.
     *
     * @remarks
     *
     */
    prefix?: string;
    /**
     * The starting document number of debit memos.
     *
     * @remarks
     *
     */
    startNumber?: number;
}
