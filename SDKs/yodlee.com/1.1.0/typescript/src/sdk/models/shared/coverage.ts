import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoverageAmount } from "./coverageamount";


export enum CoveragePlanTypeEnum {
    Ppo = "PPO",
    Hmo = "HMO",
    Unknown = "UNKNOWN"
}

export enum CoverageTypeEnum {
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


export class Coverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount", elemType: CoverageAmount })
  amount?: CoverageAmount[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=planType" })
  planType?: CoveragePlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CoverageTypeEnum;
}
