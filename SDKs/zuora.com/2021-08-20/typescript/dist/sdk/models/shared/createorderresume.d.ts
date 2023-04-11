import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field.
 *
 * @remarks
 *
 * The period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
 *
 */
export declare enum CreateOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
/**
 * Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information.
 *
 * @remarks
 *
 * If `SuspendDate` is specfied, the resumption will take place on the same day as the suspension.
 *
 */
export declare enum CreateOrderResumeResumePolicyEnum {
    Today = "Today",
    FixedPeriodsFromSuspendDate = "FixedPeriodsFromSuspendDate",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate",
    SuspendDate = "SuspendDate"
}
/**
 * Information about an order action of type `Resume`.
 *
 * @remarks
 *
 */
export declare class CreateOrderResume extends SpeakeasyBase {
    /**
     * Specifies whether to extend the subscription term by the length of time the suspension is in effect.
     *
     * @remarks
     *
     */
    extendsTerm?: boolean;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriodsType` field.
     *
     * @remarks
     *
     * The total number of the periods used to specify when a subscription resumption takes effect. The subscription resumption will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    resumePeriods?: number;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field.
     *
     * @remarks
     *
     * The period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    resumePeriodsType?: CreateOrderResumeResumePeriodsTypeEnum;
    /**
     * Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information.
     *
     * @remarks
     *
     * If `SuspendDate` is specfied, the resumption will take place on the same day as the suspension.
     *
     */
    resumePolicy: CreateOrderResumeResumePolicyEnum;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `SpecificDate`.
     *
     * @remarks
     *
     * A specific date when the subscription resumption takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription suspension date.
     *
     */
    resumeSpecificDate?: Date;
}
