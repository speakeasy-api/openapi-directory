import { SpeakeasyBase } from "../../../internal/utils";
import { AllowanceTypeEnum } from "./allowancetypeenum";
import { EarningsTypeEnum } from "./earningstypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { RateTypeEnum } from "./ratetypeenum";
export declare class EarningsRate extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE
     */
    accrueLeave?: boolean;
    allowanceType?: AllowanceTypeEnum;
    /**
     * Optional Amount for FIXEDAMOUNT RateType EarningsRate
     */
    amount?: number;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Xero identifier
     */
    earningsRateID?: string;
    earningsType?: EarningsTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    /**
     * See the ATO website for details of which payments are exempt from SGC
     */
    isExemptFromSuper?: boolean;
    /**
     * Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding
     */
    isExemptFromTax?: boolean;
    /**
     * Boolean to determine if the earnings rate is reportable or exempt from W1
     */
    isReportableAsW1?: boolean;
    /**
     * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
     */
    multiplier?: number;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.
     */
    ratePerUnit?: string;
    rateType?: RateTypeEnum;
    /**
     * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
     */
    typeOfUnits?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
}
export declare class EarningsRateInput extends SpeakeasyBase {
    /**
     * See Accounts
     */
    accountCode?: string;
    /**
     * Indicates that this earnings rate should accrue leave. Only applicable if RateType is MULTIPLE
     */
    accrueLeave?: boolean;
    allowanceType?: AllowanceTypeEnum;
    /**
     * Optional Amount for FIXEDAMOUNT RateType EarningsRate
     */
    amount?: number;
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Xero identifier
     */
    earningsRateID?: string;
    earningsType?: EarningsTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    /**
     * See the ATO website for details of which payments are exempt from SGC
     */
    isExemptFromSuper?: boolean;
    /**
     * Most payments are subject to tax, so you should only set this value if you are sure that a payment is exempt from PAYG withholding
     */
    isExemptFromTax?: boolean;
    /**
     * Boolean to determine if the earnings rate is reportable or exempt from W1
     */
    isReportableAsW1?: boolean;
    /**
     * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MULTIPLE
     */
    multiplier?: number;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * Default rate per unit (optional). Only applicable if RateType is RATEPERUNIT.
     */
    ratePerUnit?: string;
    rateType?: RateTypeEnum;
    /**
     * Type of units used to record earnings (max length = 50). Only When RateType is RATEPERUNIT
     */
    typeOfUnits?: string;
}
