import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoTaxItemFromInvoiceTaxItemType } from "./creditmemotaxitemfrominvoicetaxitemtype";
/**
 * Container for the finance information related to the credit memo item.
 *
 * @remarks
 *
 */
export declare class CreditMemoItemFromInvoiceItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The accounting code that maps to an on account in your accounting system.
     *
     * @remarks
     *
     */
    onAccountAccountingCode?: string;
    /**
     * The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The name of the revenue recognition rule governing the revenue schedule.
     *
     * @remarks
     *
     */
    revenueRecognitionRuleName?: string;
}
/**
 * The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax.
 *
 * @remarks
 *
 * **Note**: You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`.
 *
 * If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for credit memo items. The corresponding invoice item must use the same tax engine as the credit memo item to calculate tax amounts.
 *
 */
export declare enum CreditMemoItemFromInvoiceItemTypeTaxModeEnum {
    TaxExclusive = "TaxExclusive",
    TaxInclusive = "TaxInclusive"
}
/**
 * Container for custom fields of a Credit Memo Item object.
 *
 * @remarks
 *
 */
export declare class CreditMemoItemFromInvoiceItemType extends SpeakeasyBase {
    /**
     * The amount of the credit memo item.
     *
     * @remarks
     *
     */
    amount: number;
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
    financeInformation?: CreditMemoItemFromInvoiceItemTypeFinanceInformation;
    /**
     * The ID of the invoice item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * The number of units for the credit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The service end date of the credit memo item.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the credit memo item.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The name of the charge associated with the invoice.
     *
     * @remarks
     *
     */
    skuName: string;
    /**
     * Container for taxation items.
     *
     * @remarks
     *
     */
    taxItems?: CreditMemoTaxItemFromInvoiceTaxItemType[];
    /**
     * The tax mode of the credit memo item, indicating whether the amount of the credit memo item includes tax.
     *
     * @remarks
     *
     * **Note**: You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`.
     *
     * If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for credit memo items. The corresponding invoice item must use the same tax engine as the credit memo item to calculate tax amounts.
     *
     */
    taxMode?: CreditMemoItemFromInvoiceItemTypeTaxModeEnum;
    /**
     * The definable unit that you measure when determining charges.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
