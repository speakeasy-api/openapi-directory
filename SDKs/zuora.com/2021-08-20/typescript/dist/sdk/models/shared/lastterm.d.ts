import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LastTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare enum LastTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * The length of the period for the current subscription term.
**/
export declare class LastTerm extends SpeakeasyBase {
    period?: number;
    periodType?: LastTermPeriodTypeEnum;
    startDate?: Date;
    termType: LastTermTermTypeEnum;
}
