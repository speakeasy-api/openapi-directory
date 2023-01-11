import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
export declare enum CreateOrderResumeResumePolicyEnum {
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
export declare class CreateOrderResume extends SpeakeasyBase {
    extendsTerm?: boolean;
    resumePeriods?: number;
    resumePeriodsType?: CreateOrderResumeResumePeriodsTypeEnum;
    resumePolicy: CreateOrderResumeResumePolicyEnum;
    resumeSpecificDate?: Date;
}
