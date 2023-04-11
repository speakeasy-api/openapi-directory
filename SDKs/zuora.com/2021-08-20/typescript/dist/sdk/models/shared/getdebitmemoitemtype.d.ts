import { SpeakeasyBase } from "../../../internal/utils";
import { GETDMTaxItemType } from "./getdmtaxitemtype";
import { GETDMTaxItemTypeNew } from "./getdmtaxitemtypenew";
/**
 * Container for the finance information related to the debit memo item.
 *
 * @remarks
 *
 */
export declare class GETDebitMemoItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The type of the deferred revenue accounting code, such as Deferred Revenue.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCodeType?: string;
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
     * The revenue schedule number. The revenue schedule number is always prefixed with "RS", for example, RS-00000001.
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
 */
export declare enum GETDebitMemoItemTypeSourceItemTypeEnum {
    SubscriptionComponent = "SubscriptionComponent",
    InvoiceDetail = "InvoiceDetail",
    ProductRatePlanCharge = "ProductRatePlanCharge"
}
/**
 * The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax.
 *
 * @remarks
 *
 */
export declare enum GETDebitMemoItemTypeTaxModeEnum {
    TaxExclusive = "TaxExclusive",
    TaxInclusive = "TaxInclusive"
}
/**
 * Container for the taxation items of the debit memo item.
 *
 * @remarks
 *
 * **Note**: This field is only available if you set the `zuora-version` request header to `239.0` or later.
 *
 */
export declare class GETDebitMemoItemTypeTaxationItems extends SpeakeasyBase {
    /**
     * List of taxation items.
     *
     * @remarks
     *
     */
    data?: GETDMTaxItemTypeNew[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
}
/**
 * Container for custom fields of a Debit Memo Item object.
 *
 * @remarks
 *
 */
export declare class GETDebitMemoItemType extends SpeakeasyBase {
    /**
     * The amount of the debit memo item. For tax-inclusive debit memo items, the amount indicates the debit memo item amount including tax. For tax-exclusive debit memo items, the amount indicates the debit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The debit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * The balance of the debit memo item.
     *
     * @remarks
     *
     */
    balance?: number;
    /**
     * The applied amount of the debit memo item.
     *
     * @remarks
     *
     */
    beAppliedAmount?: number;
    /**
     * Comments about the debit memo item.
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    comment?: string;
    /**
     * The ID of the Zuora user who created the debit memo item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the debit memo item was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * Description about the debit memo item.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `257.0` or later.
     *
     */
    description?: string;
    /**
     * Container for the finance information related to the debit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: GETDebitMemoItemTypeFinanceInformation;
    /**
     * The ID of the debit memo item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The number of units for the debit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The end date of the service period associated with this debit memo item. Service ends one second before the date specified in this field.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The start date of the service period associated with this debit memo item. If the associated charge is a one-time fee, this date is the date of that charge.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The SKU for the product associated with the debit memo item.
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
     */
    sourceItemId?: string;
    /**
     * The type of the source item.
     *
     * @remarks
     *
     */
    sourceItemType?: GETDebitMemoItemTypeSourceItemTypeEnum;
    /**
     * The ID of the subscription associated with the debit memo item.
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
     * Container for the taxation items of the debit memo item..
     *
     * @remarks
     *
     * **Note**: This field is not available if you set the `zuora-version` request header to `239.0` or later.
     *
     */
    taxItems?: GETDMTaxItemType[];
    /**
     * The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax.
     *
     * @remarks
     *
     */
    taxMode?: GETDebitMemoItemTypeTaxModeEnum;
    /**
     * Container for the taxation items of the debit memo item.
     *
     * @remarks
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `239.0` or later.
     *
     */
    taxationItems?: GETDebitMemoItemTypeTaxationItems;
    /**
     * The units to measure usage.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
    /**
     * The per-unit price of the debit memo item.
     *
     * @remarks
     *
     */
    unitPrice?: number;
    /**
     * The ID of the Zuora user who last updated the debit memo item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the debit memo item was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
