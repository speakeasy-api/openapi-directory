import { SpeakeasyBase } from "../../../internal/utils";
import { GETRevenueItemTypeResponse } from "./getrevenueitemtyperesponse";
export declare class GETChargeRSDetailType extends SpeakeasyBase {
    /**
     * An account ID.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The revenue schedule amount, which is the sum of all revenue items. This field cannot be null and must be formatted based on the currency, such as *JPY 30* or USD *30.15*. Test out the currency to ensure you are using the proper formatting otherwise, the response will fail and this error message is returned:  *"Allocation amount with wrong decimal places."*
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
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The charge revenue summary number.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The name of the recognition rule.
     *
     * @remarks
     *
     */
    recognitionRuleName?: string;
    /**
     * The revenue that was distributed in a closed accounting period.
     *
     * @remarks
     *
     */
    recognizedRevenue?: string;
    /**
     * Revenue items are listed in ascending order by the accounting period start date.
     *
     * @remarks
     *
     */
    revenueItems?: GETRevenueItemTypeResponse[];
    /**
     * The original subscription charge ID.
     *
     * @remarks
     *
     */
    subscriptionChargeId?: string;
    /**
     * The original subscription ID.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Revenue in the open-ended accounting period.
     *
     * @remarks
     *
     */
    undistributedUnrecognizedRevenue?: string;
    /**
     * Revenue distributed in all open accounting periods, which includes the open-ended accounting period.
     *
     * @remarks
     *
     */
    unrecognizedRevenue?: string;
}
