import { SpeakeasyBase } from "../../../internal/utils";
import { PostSubscriptionPreviewCreditMemoItemsType } from "./postsubscriptionpreviewcreditmemoitemstype";
import { PostSubscriptionPreviewInvoiceItemsType } from "./postsubscriptionpreviewinvoiceitemstype";
/**
 * Container for charge metrics.
 *
**/
export declare class PostSubscriptionPreviewResponseTypeChargeMetrics extends SpeakeasyBase {
    dmrr?: string;
    dtcv?: string;
    mrr?: string;
    number?: string;
    originRatePlanId?: string;
    originalId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    tcv?: string;
}
/**
 *
 * Container for credit memos.
 *
 * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
 *
**/
export declare class PostSubscriptionPreviewResponseTypeCreditMemo extends SpeakeasyBase {
    amount?: number;
    amountWithoutTax?: number;
    creditMemoItems?: PostSubscriptionPreviewCreditMemoItemsType[];
    taxAmount?: number;
}
export declare class PostSubscriptionPreviewResponseType extends SpeakeasyBase {
    amount?: number;
    amountWithoutTax?: number;
    chargeMetrics?: PostSubscriptionPreviewResponseTypeChargeMetrics;
    contractedMrr?: number;
    creditMemo?: PostSubscriptionPreviewResponseTypeCreditMemo;
    invoice?: Record<string, any>;
    invoiceItems?: PostSubscriptionPreviewInvoiceItemsType[];
    invoiceTargetDate?: Date;
    success?: boolean;
    targetDate?: Date;
    taxAmount?: number;
    totalContractedValue?: number;
}
