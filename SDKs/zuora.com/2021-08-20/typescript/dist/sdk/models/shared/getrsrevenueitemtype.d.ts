import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Revenue Schedule Item object.
 *
 * @remarks
 *
 */
export declare class GETRsRevenueItemType extends SpeakeasyBase {
    /**
     * The accounting period end date. The accounting period end date of the open-ended accounting period is null.
     *
     * @remarks
     *
     */
    accountingPeriodEndDate?: Date;
    /**
     * The name of the accounting period. The open-ended accounting period is named `Open-Ended`.
     *
     * @remarks
     *
     */
    accountingPeriodName?: string;
    /**
     * The accounting period start date.
     *
     * @remarks
     *
     */
    accountingPeriodStartDate?: Date;
    /**
     * The amount of the revenue item.
     *
     * @remarks
     *
     */
    amount?: string;
    /**
     * The type of currency used.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The accounting code for deferred revenue, such as Monthly Recurring Liability. Required only when `overrideChargeAccountingCodes` is `true`. Otherwise, this value is ignored.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The type of the deferred revenue accounting code, such as Deferred Revenue. Required only when `overrideChargeAccountingCodes` is `true`. Otherwise, this value is ignored.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCodeType?: string;
    /**
     * Indicates if the accounting period is closed or open.
     *
     * @remarks
     *
     */
    isAccountingPeriodClosed?: boolean;
    /**
     * The accounting code for recognized revenue, such as Monthly Recurring Charges or Overage Charges. Required only when `overrideChargeAccountingCodes` is `true`. Otherwise, the value is ignored.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The type of the recognized revenue accounting code, such as Sales Revenue or Sales Discount. Required only when `overrideChargeAccountingCodes` is `true`. Otherwise, this value is ignored.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCodeType?: string;
}
