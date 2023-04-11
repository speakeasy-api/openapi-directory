import { SpeakeasyBase } from "../../../internal/utils";
import { POSTDistributionItemType } from "./postdistributionitemtype";
import { POSTRevenueScheduleByTransactionTypeRevenueEvent } from "./postrevenueschedulebytransactiontyperevenueevent";
/**
 * Container for custom fields of a Revenue Schedule object.
 *
 * @remarks
 *
 */
export declare class POSTRevenueScheduleByTransactionType extends SpeakeasyBase {
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     * Character Limit: 2,000
     *
     */
    notes?: string;
    /**
     * An array of revenue distributions. Represents how you want to distribute revenue for this revenue schedule. You can distribute revenue into a maximum of 250 accounting periods with one revenue schedule.
     *
     * @remarks
     *
     * The sum of new Amounts must equal the the Charge Amount of the specified Invoice Item.
     *
     */
    revenueDistributions?: POSTDistributionItemType[];
    /**
     * Represents a change to a revenue schedule, such as posting an invoice or distributing revenue.
     *
     * @remarks
     *
     * You must specify the `eventType` or the `eventTypeSystemID`, or both. If you have configured more than one revenue event type with the same label, you must specify the `eventTypeSystemId`.
     *
     */
    revenueEvent?: POSTRevenueScheduleByTransactionTypeRevenueEvent;
}
