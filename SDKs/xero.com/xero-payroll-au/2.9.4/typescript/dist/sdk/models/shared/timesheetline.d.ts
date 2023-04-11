import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimesheetLineInput extends SpeakeasyBase {
    /**
     * The Xero identifier for an Earnings Rate
     */
    earningsRateID?: string;
    /**
     * The number of units on a timesheet line
     */
    numberOfUnits?: number[];
    /**
     * The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.
     */
    trackingItemID?: string;
}
export declare class TimesheetLine extends SpeakeasyBase {
    /**
     * The Xero identifier for an Earnings Rate
     */
    earningsRateID?: string;
    /**
     * The number of units on a timesheet line
     */
    numberOfUnits?: number[];
    /**
     * The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.
     */
    trackingItemID?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
}
