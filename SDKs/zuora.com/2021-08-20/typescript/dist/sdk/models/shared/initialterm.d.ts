import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare enum InitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}
/**
 * The length of the period for the current subscription term.
**/
export declare class InitialTerm extends SpeakeasyBase {
    period?: number;
    periodType?: InitialTermPeriodTypeEnum;
    startDate?: Date;
    termType: InitialTermTermTypeEnum;
}
