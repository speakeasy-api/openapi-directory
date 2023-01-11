import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionAmendCreditMemo
/** 
 * Container for credit memos.
 * 
 * **Note:** This container is only available if you set the WSDL minor version to 107.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
 * 
**/
export class ActionAmendCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmountWithoutTax" })
  totalAmountWithoutTax?: number;
}
