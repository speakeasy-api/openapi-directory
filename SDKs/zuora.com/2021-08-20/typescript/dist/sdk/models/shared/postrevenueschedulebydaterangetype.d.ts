import { SpeakeasyBase } from "../../../internal/utils";
import { POSTRevenueScheduleByDateRangeTypeRevenueEvent } from "./postrevenueschedulebydaterangetyperevenueevent";
/**
 * How you want to distribute the revenue.
 *
 * @remarks
 *
 *
 * * Daily Distribution: Distributes revenue evenly across each day between the recognitionStart and recognitionEnd dates.
 * * Monthly Distribution (Back Load): Back loads the revenue so you distribute the monthly amount in the partial month in the end only.
 * * Monthly Distribution (Front Load): Front loads the revenue so you distribute the monthly amount in the partial month in the beginning only.
 * * Monthly Distribution (Proration by Days): Splits the revenue amount between the two partial months.
 *
 * **Note:** To use any of the Monthly Distribution options, you must have the "Monthly recognition over time" model enabled in **Settings > Finance > Manage Revenue Recognition Models** in the Zuora UI.
 *
 */
export declare enum POSTRevenueScheduleByDateRangeTypeDistributionTypeEnum {
    DailyDistribution = "Daily Distribution",
    MonthlyDistributionBackLoad = "Monthly Distribution (Back Load)",
    MonthlyDistributionFrontLoad = "Monthly Distribution (Front Load)",
    MonthlyDistributionProrationByDays = "Monthly Distribution (Proration by Days)"
}
/**
 * Container for custom fields of a Revenue Schedule object.
 *
 * @remarks
 *
 */
export declare class POSTRevenueScheduleByDateRangeType extends SpeakeasyBase {
    /**
     * How you want to distribute the revenue.
     *
     * @remarks
     *
     *
     * * Daily Distribution: Distributes revenue evenly across each day between the recognitionStart and recognitionEnd dates.
     * * Monthly Distribution (Back Load): Back loads the revenue so you distribute the monthly amount in the partial month in the end only.
     * * Monthly Distribution (Front Load): Front loads the revenue so you distribute the monthly amount in the partial month in the beginning only.
     * * Monthly Distribution (Proration by Days): Splits the revenue amount between the two partial months.
     *
     * **Note:** To use any of the Monthly Distribution options, you must have the "Monthly recognition over time" model enabled in **Settings > Finance > Manage Revenue Recognition Models** in the Zuora UI.
     *
     */
    distributionType?: POSTRevenueScheduleByDateRangeTypeDistributionTypeEnum;
    /**
     * Additional information about this record.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The end date of a recognition period in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     * The maximum difference between the `recognitionStart` and `recognitionEnd` date fields is equal to 250 multiplied by the length of an accounting period.
     *
     */
    recognitionEnd: Date;
    /**
     * The start date of a recognition period in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     * If there is a closed accounting period between the `recognitionStart` and `recognitionEnd` dates, the revenue that would be placed in the closed accounting period is instead placed in the next open accounting period.
     *
     */
    recognitionStart: Date;
    /**
     * Must specify at least one of `eventType` or `eventTypeSystemId`.
     *
     * @remarks
     *
     */
    revenueEvent: POSTRevenueScheduleByDateRangeTypeRevenueEvent;
}
