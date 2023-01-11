import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
export declare enum GetOrderResumeResumePolicyEnum {
    Today = "Today",
    FixedPeriodsFromSuspendDate = "FixedPeriodsFromSuspendDate",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate",
    SuspendDate = "SuspendDate"
}
/**
 * Information about an order action of type `Resume`.
 *
**/
export declare class GetOrderResume extends SpeakeasyBase {
    extendsTerm?: boolean;
    resumeDate?: Date;
    resumePeriods?: number;
    resumePeriodsType?: GetOrderResumeResumePeriodsTypeEnum;
    resumePolicy?: GetOrderResumeResumePolicyEnum;
    resumeSpecificDate?: Date;
}
