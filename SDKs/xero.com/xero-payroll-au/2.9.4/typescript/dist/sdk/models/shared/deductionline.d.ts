import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionTypeCalculationTypeEnum } from "./deductiontypecalculationtypeenum";
export declare class DeductionLine extends SpeakeasyBase {
    /**
     * Deduction type amount
     */
    amount?: number;
    calculationType: DeductionTypeCalculationTypeEnum;
    /**
     * Xero deduction type identifier
     */
    deductionTypeID: string;
    /**
     * Deduction number of units
     */
    numberOfUnits?: number;
    /**
     * The Percentage of the Deduction
     */
    percentage?: number;
}
