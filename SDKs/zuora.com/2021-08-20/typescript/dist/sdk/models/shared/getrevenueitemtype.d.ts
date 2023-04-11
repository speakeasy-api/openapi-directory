import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Revenue Event Item object.
 *
 * @remarks
 *
 */
export declare class GETRevenueItemType extends SpeakeasyBase {
    /**
     * The accounting period end date. The accounting period end date of the open-ended accounting period is null.
     *
     * @remarks
     *
     */
    accountingPeriodEndDate?: Date;
    /**
     * Name of the accounting period. The open-ended accounting period is named `Open-Ended`.
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
     * The revenue schedule amount, which is the sum of all revenue items. This field cannot be null and must be formatted based on the currency, such as *JPY 30* or *USD 30.15*. Test out the currency to ensure you are using the proper formatting otherwise, the response will fail and this error message is returned:  `Allocation amount with wrong decimal places.`
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
