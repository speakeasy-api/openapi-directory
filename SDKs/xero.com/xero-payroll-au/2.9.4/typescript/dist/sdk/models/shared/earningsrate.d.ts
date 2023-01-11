import { SpeakeasyBase } from "../../../internal/utils";
import { AllowanceTypeEnum } from "./allowancetypeenum";
import { EarningsTypeEnum } from "./earningstypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { RateTypeEnum } from "./ratetypeenum";
export declare class EarningsRate extends SpeakeasyBase {
    accountCode?: string;
    accrueLeave?: boolean;
    allowanceType?: AllowanceTypeEnum;
    amount?: number;
    currentRecord?: boolean;
    earningsRateID?: string;
    earningsType?: EarningsTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    isExemptFromSuper?: boolean;
    isExemptFromTax?: boolean;
    isReportableAsW1?: boolean;
    multiplier?: number;
    name?: string;
    ratePerUnit?: string;
    rateType?: RateTypeEnum;
    typeOfUnits?: string;
    updatedDateUTC?: string;
}
export declare class EarningsRateInput extends SpeakeasyBase {
    accountCode?: string;
    accrueLeave?: boolean;
    allowanceType?: AllowanceTypeEnum;
    amount?: number;
    currentRecord?: boolean;
    earningsRateID?: string;
    earningsType?: EarningsTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    isExemptFromSuper?: boolean;
    isExemptFromTax?: boolean;
    isReportableAsW1?: boolean;
    multiplier?: number;
    name?: string;
    ratePerUnit?: string;
    rateType?: RateTypeEnum;
    typeOfUnits?: string;
}
