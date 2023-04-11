import { SpeakeasyBase } from "../../../internal/utils";
import { PutDebitMemoTaxItemType } from "./putdebitmemotaxitemtype";
/**
 * Container for the finance information related to the debit memo item.
 *
 * @remarks
 *
 */
export declare class PUTDebitMemoItemTypeFinanceInformation extends SpeakeasyBase {
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
 * Container for custom fields of a Debit Memo Item object.
 *
 * @remarks
 *
 */
export declare class PUTDebitMemoItemType extends SpeakeasyBase {
    /**
     * The amount of the debit memo item. For tax-inclusive debit memo items, the amount indicates the debit memo item amount including tax. For tax-exclusive debit memo items, the amount indicates the debit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Comments about the debit memo item.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * Container for the finance information related to the debit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: PUTDebitMemoItemTypeFinanceInformation;
    /**
     * The ID of the debit memo item.
     *
     * @remarks
     *
     */
    id: string;
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
     * The name of the SKU.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * Container for debit memo taxation items.
     *
     * @remarks
     *
     */
    taxItems?: PutDebitMemoTaxItemType[];
    /**
     * The definable unit that you measure when determining charges.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
