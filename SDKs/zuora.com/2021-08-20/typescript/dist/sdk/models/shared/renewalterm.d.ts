import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RenewalTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare class RenewalTerm extends SpeakeasyBase {
    period?: number;
    periodType?: RenewalTermPeriodTypeEnum;
}
