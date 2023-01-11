import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostSubscriptionPreviewCreditMemoItemsType } from "./postsubscriptionpreviewcreditmemoitemstype";
import { PutSubscriptionPreviewInvoiceItemsType } from "./putsubscriptionpreviewinvoiceitemstype";



// PutSubscriptionResponseTypeChargeMetrics
/** 
 * Container for charge metrics.
 * 
**/
export class PutSubscriptionResponseTypeChargeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dmrr" })
  dmrr?: string;

  @SpeakeasyMetadata({ data: "json, name=dtcv" })
  dtcv?: string;

  @SpeakeasyMetadata({ data: "json, name=mrr" })
  mrr?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=originRatePlanId" })
  originRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=originalId" })
  originalId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=tcv" })
  tcv?: string;
}


// PutSubscriptionResponseTypeCreditMemo
/** 
 * Container for credit memos.
 * 
 * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
 * 
**/
export class PutSubscriptionResponseTypeCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=creditMemoItems", elemType: PostSubscriptionPreviewCreditMemoItemsType })
  creditMemoItems?: PostSubscriptionPreviewCreditMemoItemsType[];

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


export class PutSubscriptionResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=chargeMetrics" })
  chargeMetrics?: PutSubscriptionResponseTypeChargeMetrics;

  @SpeakeasyMetadata({ data: "json, name=creditMemo" })
  creditMemo?: PutSubscriptionResponseTypeCreditMemo;

  @SpeakeasyMetadata({ data: "json, name=creditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItems", elemType: PutSubscriptionPreviewInvoiceItemsType })
  invoiceItems?: PutSubscriptionPreviewInvoiceItemsType[];

  @SpeakeasyMetadata({ data: "json, name=invoiceTargetDate" })
  invoiceTargetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paidAmount" })
  paidAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaMrr" })
  totalDeltaMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDeltaTcv" })
  totalDeltaTcv?: number;
}
