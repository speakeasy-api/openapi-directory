import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export enum GetOrderResumeResumePolicyEnum {
    Today = "Today",
    FixedPeriodsFromSuspendDate = "FixedPeriodsFromSuspendDate",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate",
    SuspendDate = "SuspendDate"
}


// GetOrderResume
/** 
 * Information about an order action of type `Resume`.
 * 
**/
export class GetOrderResume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extendsTerm" })
  extendsTerm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resumeDate" })
  resumeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=resumePeriods" })
  resumePeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=resumePeriodsType" })
  resumePeriodsType?: GetOrderResumeResumePeriodsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resumePolicy" })
  resumePolicy?: GetOrderResumeResumePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=resumeSpecificDate" })
  resumeSpecificDate?: Date;
}
