import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Condition for the charge to become inactive.
 *
 * @remarks
 *
 * If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.
 *
 * If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when then charge becomes inactive.
 *
 */
export declare enum EndConditionsEndDateConditionEnum {
    SubscriptionEnd = "Subscription_End",
    FixedPeriod = "Fixed_Period",
    SpecificEndDate = "Specific_End_Date"
}
/**
 * Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.
 *
 * @remarks
 *
 */
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
 * @remarks
 *
 */
export declare class EndConditions extends SpeakeasyBase {
    /**
     * Condition for the charge to become inactive.
     *
     * @remarks
     *
     * If the value of this field is `Fixed_Period`, the charge is active for a predefined duration based on the value of the `upToPeriodsType` and `upToPeriods` fields.
     *
     * If the value of this field is `Specific_End_Date`, use the `specificEndDate` field to specify the date when then charge becomes inactive.
     *
     */
    endDateCondition?: EndConditionsEndDateConditionEnum;
    /**
     * Date in YYYY-MM-DD format. Only applicable if the value of the `endDateCondition` field is `Specific_End_Date`.
     *
     * @remarks
     *
     */
    specificEndDate?: Date;
    /**
     * Duration of the charge in billing periods, days, weeks, months, or years, depending on the value of the `upToPeriodsType` field. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.
     *
     * @remarks
     *
     */
    upToPeriods?: number;
    /**
     * Unit of time that the charge duration is measured in. Only applicable if the value of the `endDateCondition` field is `Fixed_Period`.
     *
     * @remarks
     *
     */
    upToPeriodsType?: EndConditionsUpToPeriodsTypeEnum;
}
