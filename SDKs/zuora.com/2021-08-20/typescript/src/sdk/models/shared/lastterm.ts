import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LastTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}

export enum LastTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}


// LastTerm
/** 
 * The length of the period for the current subscription term.
**/
export class LastTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: LastTermPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termType" })
  termType: LastTermTermTypeEnum;
}
