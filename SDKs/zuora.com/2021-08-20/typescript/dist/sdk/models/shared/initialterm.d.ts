import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specify only when the termType is 'TERMED'.
 */
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
 */
export declare class InitialTerm extends SpeakeasyBase {
    /**
     * Specify only when the termType is 'TERMED'.
     */
    period?: number;
    /**
     * Specify only when the termType is 'TERMED'.
     */
    periodType?: InitialTermPeriodTypeEnum;
    /**
     * The start date of the current term.
     *
     * @remarks
     *
     */
    startDate?: Date;
    termType: InitialTermTermTypeEnum;
}
