import { SpeakeasyBase } from "../../../internal/utils";
import { POSTSubscriptionPreviewCreditMemoItemsType } from "./postsubscriptionpreviewcreditmemoitemstype";
import { POSTSubscriptionPreviewInvoiceItemsType } from "./postsubscriptionpreviewinvoiceitemstype";
/**
 * Container for charge metrics.
 *
 * @remarks
 *
 */
export declare class POSTSubscriptionPreviewResponseTypeChargeMetrics extends SpeakeasyBase {
    /**
     * Change in monthly recurring revenue.
     *
     * @remarks
     *
     */
    dmrr?: string;
    /**
     * Change in total contract value.
     *
     * @remarks
     *
     */
    dtcv?: string;
    /**
     * Monthly recurring revenue.
     *
     * @remarks
     *
     */
    mrr?: string;
    /**
     * The charge number of the subscription. Only available for update subscription.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The origin rate plan ID. Only available for update subscription.
     *
     * @remarks
     *
     */
    originRatePlanId?: string;
    /**
     * The original rate plan charge ID. Only available for update subscription.
     *
     * @remarks
     *
     */
    originalId?: string;
    /**
     * The product rate plan charge ID.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The product rate plan ID.
     *
     * @remarks
     *
     */
    productRatePlanId?: string;
    /**
     * Total contract value.
     *
     * @remarks
     *
     */
    tcv?: string;
}
/**
 *
 * @remarks
 * Container for credit memos.
 *
 * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
 *
 */
export declare class POSTSubscriptionPreviewResponseTypeCreditMemo extends SpeakeasyBase {
    /**
     * Credit memo amount.
     */
    amount?: number;
    /**
     * Credit memo amount minus tax.
     */
    amountWithoutTax?: number;
    creditMemoItems?: POSTSubscriptionPreviewCreditMemoItemsType[];
    /**
     * Tax amount on the credit memo.
     */
    taxAmount?: number;
}
export declare class POSTSubscriptionPreviewResponseType extends SpeakeasyBase {
    /**
     * Invoice amount.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Invoice amount minus tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * Container for charge metrics.
     *
     * @remarks
     *
     */
    chargeMetrics?: POSTSubscriptionPreviewResponseTypeChargeMetrics;
    /**
     * Monthly recurring revenue of the subscription.
     *
     * @remarks
     *
     */
    contractedMrr?: number;
    /**
     *
     * @remarks
     * Container for credit memos.
     *
     * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    creditMemo?: POSTSubscriptionPreviewResponseTypeCreditMemo;
    /**
     * Container for invoices.
     *
     * @remarks
     *
     *
     *  **Note:** This field is only available if you set the Zuora REST API minor version to 207.0 or later in the request header. Also, the response structure is changed and the following invoice related response fields are moved to this **invoice** container:
     *
     *    * amount
     *    * amountWithoutTax
     *    * taxAmount
     *    * invoiceItems
     *    * targetDate
     *    * chargeMetrics
     *
     *
     */
    invoice?: Record<string, any>;
    /**
     * Container for invoice items.
     *
     * @remarks
     *
     */
    invoiceItems?: POSTSubscriptionPreviewInvoiceItemsType[];
    /**
     * Date through which charges are calculated on the invoice, as yyyy-mm-dd.
     *
     * @remarks
     *
     * **Note:** This field is only available if you do not specify the Zuora REST API minor version or specify the minor version to 186.0, 187.0, 188.0, 189.0, and 196.0. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    invoiceTargetDate?: Date;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Date through which to calculate charges if an invoice is generated, as yyyy-mm-dd. Default is current date.
     *
     * @remarks
     *
     * **Note:** This field is only available if you set the Zuora REST API minor version to 207.0 or later in the request header. See [Zuora REST API Versions](https://www.zuora.com/developer/api-reference/#section/API-Versions) for more information.
     *
     */
    targetDate?: Date;
    /**
     * Tax amount on the invoice.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * Total contracted value of the subscription.
     *
     * @remarks
     *
     */
    totalContractedValue?: number;
}
