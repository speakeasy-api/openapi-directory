import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EndConditionsEndDateConditionEnum {
    SubscriptionEnd = "Subscription_End",
    FixedPeriod = "Fixed_Period",
    SpecificEndDate = "Specific_End_Date"
}
export declare enum EndConditionsUpToPeriodsTypeEnum {
    BillingPeriods = "Billing_Periods",
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
    Years = "Years"
}
/**
 * Specifies when a charge becomes inactive.
 *
**/
export declare class EndConditions extends SpeakeasyBase {
    endDateCondition?: EndConditionsEndDateConditionEnum;
    specificEndDate?: Date;
    upToPeriods?: number;
    upToPeriodsType?: EndConditionsUpToPeriodsTypeEnum;
}
