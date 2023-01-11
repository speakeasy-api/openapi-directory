import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum CoverageAmountLimitTypeEnum {
    InNetwork = "IN_NETWORK",
    OutNetwork = "OUT_NETWORK"
}

export enum CoverageAmountTypeEnum {
    Deductible = "DEDUCTIBLE",
    OutOfPocket = "OUT_OF_POCKET",
    AnnualBenefit = "ANNUAL_BENEFIT",
    MaxBenefit = "MAX_BENEFIT",
    CoverageAmount = "COVERAGE_AMOUNT",
    MonthlyBenefit = "MONTHLY_BENEFIT",
    Other = "OTHER"
}

export enum CoverageAmountUnitTypeEnum {
    PerFamily = "PER_FAMILY",
    PerMember = "PER_MEMBER"
}


export class CoverageAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: Money;

  @SpeakeasyMetadata({ data: "json, name=limitType" })
  limitType?: CoverageAmountLimitTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=met" })
  met?: Money;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CoverageAmountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unitType" })
  unitType?: CoverageAmountUnitTypeEnum;
}
