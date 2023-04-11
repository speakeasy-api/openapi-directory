import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
 *
 * @remarks
 *
 * The period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
 *
 */
export declare enum GetOrderResumeResumePeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
/**
 * Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
 *
 * @remarks
 *
 * If `SuspendDate` is specfied, the resumption will take place on the same day as the suspension.
 *
 */
export declare enum GetOrderResumeResumePolicyEnum {
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
export declare class GetOrderResume extends SpeakeasyBase {
    /**
     * Specifies whether to extend the subscription term by the length of time the suspension is in effect. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     */
    extendsTerm?: boolean;
    /**
     * The resume date when the resumption takes effect.
     *
     * @remarks
     *
     */
    resumeDate?: Date;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriodsType` field. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * The total number of the periods used to specify when a subscription resumption takes effect. The subscription resumption will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    resumePeriods?: number;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`. It must be used together with the `resumePeriods` field. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * The period type used to specify when a subscription resumption takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    resumePeriodsType?: GetOrderResumeResumePeriodsTypeEnum;
    /**
     * Resume methods. Specify a way to resume a subscription. See [Resume Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Resume_a_Subscription#Resume_Date) for more information. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * If `SuspendDate` is specfied, the resumption will take place on the same day as the suspension.
     *
     */
    resumePolicy?: GetOrderResumeResumePolicyEnum;
    /**
     * This field is applicable only when the `resumePolicy` field is set to `SpecificDate`. Note this field is not applicable in a Resume order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * A specific date when the subscription resumption takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription suspension date.
     *
     */
    resumeSpecificDate?: Date;
}
