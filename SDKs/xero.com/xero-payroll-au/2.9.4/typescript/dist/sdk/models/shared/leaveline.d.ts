import { SpeakeasyBase } from "../../../internal/utils";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { EntitlementFinalPayPayoutTypeEnum } from "./entitlementfinalpaypayouttypeenum";
import { LeaveLineCalculationTypeEnum } from "./leavelinecalculationtypeenum";
export declare class LeaveLine extends SpeakeasyBase {
    /**
     * Hours of leave accrued each year
     */
    annualNumberOfUnits?: number;
    /**
     * Calculation type for leave line for Opening Balance on Employee
     */
    calculationType?: LeaveLineCalculationTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    entitlementFinalPayPayoutType?: EntitlementFinalPayPayoutTypeEnum;
    /**
     * Normal ordinary earnings number of units for leave line.
     */
    fullTimeNumberOfUnitsPerPeriod?: number;
    /**
     * amount of leave line
     */
    includeSuperannuationGuaranteeContribution?: boolean;
    /**
     * Xero leave type identifier
     */
    leaveTypeID?: string;
    /**
     * Number of units for leave line.
     */
    numberOfUnits?: number;
}
