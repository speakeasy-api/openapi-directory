import { SpeakeasyBase } from "../../../internal/utils";
import { ActionAmendCreditMemo } from "./actionamendcreditmemo";
import { ActionAmendCreditMemoItem } from "./actionamendcreditmemoitem";
export declare class ActionAmendCreditMemoData extends SpeakeasyBase {
    /**
     * Container for credit memos.
     *
     * @remarks
     *
     * **Note:** This container is only available if you set the WSDL minor version to 107.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemo?: ActionAmendCreditMemo;
    creditMemoItem?: ActionAmendCreditMemoItem[];
}
