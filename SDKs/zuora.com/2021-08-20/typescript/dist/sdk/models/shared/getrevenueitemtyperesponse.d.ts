import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETRevenueItemTypeResponse extends SpeakeasyBase {
    /**
     * The accounting period end date. The accounting period end date of the open-ended accounting period is null.
     *
     * @remarks
     *
     */
    accountingPeriodEndDate?: Date;
    /**
     * Name of the accounting period. The open-ended accounting period is named Open-Ended.
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
     * Indicates if the accounting period is closed or open.
     *
     * @remarks
     *
     */
    isAccountingPeriodClosed?: boolean;
}
