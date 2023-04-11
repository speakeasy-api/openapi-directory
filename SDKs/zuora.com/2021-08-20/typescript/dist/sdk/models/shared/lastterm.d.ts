import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specify only when the termType is 'TERMED'.
 */
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
 */
export declare class LastTerm extends SpeakeasyBase {
    /**
     * Specify only when the termType is 'TERMED'.
     */
    period?: number;
    /**
     * Specify only when the termType is 'TERMED'.
     */
    periodType?: LastTermPeriodTypeEnum;
    /**
     * The start date of the current term. You can change the term start date of a renewed subscription through a T&Cs order action. However, when changing it to an earlier date, this date must not be earlier than the term start date of the current term before this T&Cs.
     *
     * @remarks
     *
     */
    startDate?: Date;
    termType: LastTermTermTypeEnum;
}
