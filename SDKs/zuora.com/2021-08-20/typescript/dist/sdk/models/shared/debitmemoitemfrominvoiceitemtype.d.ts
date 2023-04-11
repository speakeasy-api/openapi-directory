import { SpeakeasyBase } from "../../../internal/utils";
import { DebitMemoTaxItemFromInvoiceTaxItemType } from "./debitmemotaxitemfrominvoicetaxitemtype";
/**
 * Container for the finance information related to the debit memo item.
 *
 * @remarks
 *
 */
export declare class DebitMemoItemFromInvoiceItemTypeFinanceInformation extends SpeakeasyBase {
    /**
     * The accounting code for the deferred revenue, such as Monthly Recurring Liability.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
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
 * The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax.
 *
 * @remarks
 *
 * **Note**: You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`.
 *
 * If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for debit memo items. The corresponding invoice item must use the same tax engine as the debit memo item to calculate tax amounts.
 *
 */
export declare enum DebitMemoItemFromInvoiceItemTypeTaxModeEnum {
    TaxExclusive = "TaxExclusive",
    TaxInclusive = "TaxInclusive"
}
/**
 * Container for custom fields of a Debit Memo Item object.
 *
 * @remarks
 *
 */
export declare class DebitMemoItemFromInvoiceItemType extends SpeakeasyBase {
    /**
     * The amount of the debit memo item.
     *
     * @remarks
     *
     */
    amount: number;
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
     * The description of the debit memo item.
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
    financeInformation?: DebitMemoItemFromInvoiceItemTypeFinanceInformation;
    /**
     * The ID of the invoice item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * The number of units for the debit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The service end date of the debit memo item.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * The service start date of the debit memo item.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * TThe name of the charge associated with the invoice.
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
    taxItems?: DebitMemoTaxItemFromInvoiceTaxItemType[];
    /**
     * The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax.
     *
     * @remarks
     *
     * **Note**: You can set this field to `TaxInclusive` only if the `taxAutoCalculation` field is set to `true`.
     *
     * If you set `taxMode` to `TaxInclusive`, you cannot input tax amounts for debit memo items. The corresponding invoice item must use the same tax engine as the debit memo item to calculate tax amounts.
     *
     */
    taxMode?: DebitMemoItemFromInvoiceItemTypeTaxModeEnum;
    /**
     * The definable unit that you measure when determining charges.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
