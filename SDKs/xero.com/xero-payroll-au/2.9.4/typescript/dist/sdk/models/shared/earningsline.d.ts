import { SpeakeasyBase } from "../../../internal/utils";
import { EarningsRateCalculationTypeEnum } from "./earningsratecalculationtypeenum";
export declare class EarningsLine extends SpeakeasyBase {
    /**
     * Earnings rate amount
     */
    amount?: number;
    /**
     * Annual salary for earnings line
     */
    annualSalary?: number;
    calculationType?: EarningsRateCalculationTypeEnum;
    /**
     * Xero unique id for earnings rate
     */
    earningsRateID: string;
    /**
     * Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed
     */
    fixedAmount?: number;
    /**
     * Normal number of units for EarningsLine. Applicable when RateType is "MULTIPLE"
     */
    normalNumberOfUnits?: number;
    /**
     * Earnings rate number of units.
     */
    numberOfUnits?: number;
    /**
     * number of units for earning line
     */
    numberOfUnitsPerWeek?: number;
    /**
     * Rate per unit of the EarningsLine.
     */
    ratePerUnit?: number;
}
