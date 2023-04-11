import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTDistributionItemType extends SpeakeasyBase {
    /**
     * Name of the accounting period. The open-ended accounting period is named `Open-Ended`.
     *
     * @remarks
     *
     * The accounting period must be open.
     *
     */
    accountingPeriodName: string;
    /**
     * Amount of revenue you want to distribute into the accounting period.
     *
     * @remarks
     *
     * The value must be formatted based on the currency, for example, `JPY 30` or `USD 30.15`. If the value is formatted incorrectly, the following error message is returned: `Allocation amount with wrong decimal places.`
     *
     */
    newAmount: string;
}
