import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EndConditionsEndDateConditionEnum {
    SubscriptionEnd = "Subscription_End",
    FixedPeriod = "Fixed_Period",
    SpecificEndDate = "Specific_End_Date"
}

export enum EndConditionsUpToPeriodsTypeEnum {
    BillingPeriods = "Billing_Periods",
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
    Years = "Years"
}


// EndConditions
/** 
 * Specifies when a charge becomes inactive.
 * 
**/
export class EndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDateCondition" })
  endDateCondition?: EndConditionsEndDateConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=specificEndDate" })
  specificEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=upToPeriods" })
  upToPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=upToPeriodsType" })
  upToPeriodsType?: EndConditionsUpToPeriodsTypeEnum;
}
