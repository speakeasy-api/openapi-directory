import { SpeakeasyBase } from "../../../internal/utils";
import { GETCMTaxItemType } from "./getcmtaxitemtype";
import { GETCMTaxItemTypeNew } from "./getcmtaxitemtypenew";
/**
 * The type of the credit from item.
 *
 * @remarks
 *
 */
export declare enum GETCreditMemoItemTypeCreditFromItemSourceEnum {
    InvoiceItem = "InvoiceItem",
    CreditMemoItem = "CreditMemoItem"
}
/**
 * Container for the finance information related to the credit memo item.
 *
 * @remarks
 *
 */
export declare class GETCreditMemoItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The type of the deferred revenue accounting code, such as Deferred Revenue.'
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCodeType?: string;
    /**
     * The accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCode?: string;
    /**
     * The type of the accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCodeType?: string;
    /**
     * The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The type of the recognized revenue accounting code, such as Sales Revenue or Sales Discount.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCodeType?: string;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     */
    revenueRecognitionRuleName?: string;
    /**
     * Revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, RS-00000001.
     *
     * @remarks
     *
     */
    revenueScheduleNumber?: string;
}
/**
 * The type of the source item.
 *
 * @remarks
 *
 * - If a credit memo is not created from an invoice or a product rate plan charge, the value of this field is `SubscriptionComponent`.
 * - If a credit memo is created from an invoice, the value of this field is `InvoiceDetail`.
 * - If a credit memo is created from a product rate plan charge, the value of this field is `ProductRatePlanCharge`.
 *
 */
export declare enum GETCreditMemoItemTypeSourceItemTypeEnum {
    SubscriptionComponent = "SubscriptionComponent",
    InvoiceDetail = "InvoiceDetail",
    ProductRatePlanCharge = "ProductRatePlanCharge"
}
/**
 * The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax.
 *
 * @remarks
 *
 */
export declare enum GETCreditMemoItemTypeTaxModeEnum {
    TaxExclusive = "TaxExclusive",
    TaxInclusive = "TaxInclusive"
}
/**
 * Container for the taxation items of the credit memo item.
 *
 * @remarks
 *
 * **Note**: This field is only available if you set the `zuora-version` request header to `239.0` or later.
 *
 */
export declare class GETCreditMemoItemTypeTaxationItems extends SpeakeasyBase {
    /**
     * List of taxation items.
     *
     * @remarks
     *
     */
    data?: GETCMTaxItemTypeNew[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
}
/**
 * Container for custom fields of a Credit Memo Item object.
 *
 * @remarks
 *
 */
export declare class GETCreditMemoItemType extends SpeakeasyBase {
    /**
     * The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The credit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * The applied amount of the credit memo item.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The unique ID of the credit memo item that the discount charge is applied to.
     *
     * @remarks
     *
     */
    appliedToItemId?: string;
    /**
     * Comments about the credit memo item.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the credit memo item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the credit memo item was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the credit from item.
     *
     * @remarks
     *
     */
    creditFromItemId?: string;
    /**
     * The type of the credit from item.
     *
     * @remarks
     *
     */
    creditFromItemSource?: GETCreditMemoItemTypeCreditFromItemSourceEnum;
    /**
     * Container for the taxation items of the credit memo item.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `239.0` or later.
     *
     */
    creditTaxItems?: GETCMTaxItemType[];
    /**
     * The description of the credit memo item.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    description?: string;
    /**
     * Container for the finance information related to the credit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: GETCreditMemoItemTypeFinanceInformation;
    /**
     * The ID of the credit memo item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The kind of the charge for the credit memo item. Its possible values are `Charge` and `Discount`.
     *
     * @remarks
     *
     */
    processingType?: string;
    /**
     * The number of units for the credit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The amount of the refund on the credit memo item.
     *
     * @remarks
     *
     */
    refundAmount?: number;
    /**
     * The service end date of the credit memo item.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the credit memo item. If the associated charge is a one-time fee, this date is the date of that charge.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The SKU for the product associated with the credit memo item.
     *
     * @remarks
     *
     */
    sku?: string;
    /**
     * The name of the SKU.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * The ID of the source item.
     *
     * @remarks
     *
     * - If the value of the `sourceItemType` field is `SubscriptionComponent` , the value of this field is the ID of the corresponding rate plan charge.
     * - If the value of the `sourceItemType` field is `InvoiceDetail`, the value of this field is the ID of the corresponding invoice item.
     * - If the value of the `sourceItemType` field is `ProductRatePlanCharge` , the value of this field is the ID of the corresponding product rate plan charge.
     *
     */
    sourceItemId?: string;
    /**
     * The type of the source item.
     *
     * @remarks
     *
     * - If a credit memo is not created from an invoice or a product rate plan charge, the value of this field is `SubscriptionComponent`.
     * - If a credit memo is created from an invoice, the value of this field is `InvoiceDetail`.
     * - If a credit memo is created from a product rate plan charge, the value of this field is `ProductRatePlanCharge`.
     *
     */
    sourceItemType?: GETCreditMemoItemTypeSourceItemTypeEnum;
    /**
     * The ID of the subscription associated with the credit memo item.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax.
     *
     * @remarks
     *
     */
    taxMode?: GETCreditMemoItemTypeTaxModeEnum;
    /**
     * Container for the taxation items of the credit memo item.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `239.0` or later.
     *
     */
    taxationItems?: GETCreditMemoItemTypeTaxationItems;
    /**
     * The unapplied amount of the credit memo item.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
    /**
     * The units to measure usage.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
    /**
     * The per-unit price of the credit memo item.
     *
     * @remarks
     *
     */
    unitPrice?: number;
    /**
     * The ID of the Zuora user who last updated the credit memo item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the credit memo item was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
