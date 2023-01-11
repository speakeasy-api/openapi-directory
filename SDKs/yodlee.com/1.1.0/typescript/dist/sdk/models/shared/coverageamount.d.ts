import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum CoverageAmountLimitTypeEnum {
    InNetwork = "IN_NETWORK",
    OutNetwork = "OUT_NETWORK"
}
export declare enum CoverageAmountTypeEnum {
    Deductible = "DEDUCTIBLE",
    OutOfPocket = "OUT_OF_POCKET",
    AnnualBenefit = "ANNUAL_BENEFIT",
    MaxBenefit = "MAX_BENEFIT",
    CoverageAmount = "COVERAGE_AMOUNT",
    MonthlyBenefit = "MONTHLY_BENEFIT",
    Other = "OTHER"
}
export declare enum CoverageAmountUnitTypeEnum {
    PerFamily = "PER_FAMILY",
    PerMember = "PER_MEMBER"
}
export declare class CoverageAmount extends SpeakeasyBase {
    cover?: Money;
    limitType?: CoverageAmountLimitTypeEnum;
    met?: Money;
    type?: CoverageAmountTypeEnum;
    unitType?: CoverageAmountUnitTypeEnum;
}
