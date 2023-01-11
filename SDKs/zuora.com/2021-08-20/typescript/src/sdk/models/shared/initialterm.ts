import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InitialTermPeriodTypeEnum {
    Month = "Month",
    Year = "Year",
    Day = "Day",
    Week = "Week"
}

export enum InitialTermTermTypeEnum {
    Termed = "TERMED",
    Evergreen = "EVERGREEN"
}


// InitialTerm
/** 
 * The length of the period for the current subscription term.
**/
export class InitialTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType?: InitialTermPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=termType" })
  termType: InitialTermTermTypeEnum;
}
