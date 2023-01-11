import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export enum CreateOrderResumeResumePolicyEnum {
    Today = "Today",
    FixedPeriodsFromSuspendDate = "FixedPeriodsFromSuspendDate",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate",
    SuspendDate = "SuspendDate"
}


// CreateOrderResume
/** 
 * Information about an order action of type `Resume`.
 * 
**/
export class CreateOrderResume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extendsTerm" })
  extendsTerm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resumePeriods" })
  resumePeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=resumePeriodsType" })
  resumePeriodsType?: CreateOrderResumeResumePeriodsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resumePolicy" })
  resumePolicy: CreateOrderResumeResumePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=resumeSpecificDate" })
  resumeSpecificDate?: Date;
}
