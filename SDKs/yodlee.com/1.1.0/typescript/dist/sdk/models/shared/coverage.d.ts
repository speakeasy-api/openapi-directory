import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageAmount } from "./coverageamount";
export declare enum CoveragePlanTypeEnum {
    Ppo = "PPO",
    Hmo = "HMO",
    Unknown = "UNKNOWN"
}
export declare enum CoverageTypeEnum {
    Vision = "VISION",
    Dental = "DENTAL",
    Medical = "MEDICAL",
    Health = "HEALTH",
    DeathCover = "DEATH_COVER",
    TotalPermanentDisability = "TOTAL_PERMANENT_DISABILITY",
    AccidentalDeathCover = "ACCIDENTAL_DEATH_COVER",
    IncomeProtection = "INCOME_PROTECTION",
    DeathTotalPermanentDisability = "DEATH_TOTAL_PERMANENT_DISABILITY",
    Other = "OTHER"
}
export declare class Coverage extends SpeakeasyBase {
    amount?: CoverageAmount[];
    endDate?: string;
    planType?: CoveragePlanTypeEnum;
    startDate?: string;
    type?: CoverageTypeEnum;
}
