import { SpeakeasyBase } from "../../../internal/utils";
import { PutCreditMemoTaxItemType } from "./putcreditmemotaxitemtype";
/**
 * Container for the finance information related to the credit memo item.
 *
 * @remarks
 *
 */
export declare class PUTCreditMemoItemTypeFinanceInformation extends SpeakeasyBase {
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
 * Container for custom fields of a Credit Memo Item object.
 *
 * @remarks
 *
 */
export declare class PUTCreditMemoItemType extends SpeakeasyBase {
    /**
     * The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * Comments about the credit memo item.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * Container for the finance information related to the credit memo item.
     *
     * @remarks
     *
     */
    financeInformation?: PUTCreditMemoItemTypeFinanceInformation;
    /**
     * The ID of the credit memo item.
     *
     * @remarks
     *
     */
    id: string;
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
     * The name of the SKU.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * Container for credit memo taxation items.
     *
     * @remarks
     *
     */
    taxItems?: PutCreditMemoTaxItemType[];
    /**
     * The definable unit that you measure when determining charges.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
