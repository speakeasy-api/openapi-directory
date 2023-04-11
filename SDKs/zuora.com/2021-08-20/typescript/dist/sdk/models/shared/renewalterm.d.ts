import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unit of time that the renewal term is measured in.
 *
 * @remarks
 *
 */
export declare enum RenewalTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}
export declare class RenewalTerm extends SpeakeasyBase {
    /**
     * Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.
     *
     * @remarks
     *
     */
    period?: number;
    /**
     * Unit of time that the renewal term is measured in.
     *
     * @remarks
     *
     */
    periodType?: RenewalTermPeriodTypeEnum;
}
