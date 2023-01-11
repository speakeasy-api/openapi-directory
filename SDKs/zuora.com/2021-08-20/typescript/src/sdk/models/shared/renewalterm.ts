import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RenewalTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}


export class RenewalTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: RenewalTermPeriodTypeEnum;
}
