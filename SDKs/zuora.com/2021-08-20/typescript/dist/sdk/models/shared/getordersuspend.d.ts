import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
 *
 * @remarks
 *
 * The period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
 *
 */
export declare enum GetOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
/**
 * Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
 *
 * @remarks
 *
 */
export declare enum GetOrderSuspendSuspendPolicyEnum {
    Today = "Today",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate"
}
/**
 * Information about an order action of type `Suspend`.
 *
 * @remarks
 *
 */
export declare class GetOrderSuspend extends SpeakeasyBase {
    /**
     * The suspend date when the suspension takes effect.
     *
     * @remarks
     *
     */
    suspendDate?: Date;
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriodsType` field. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * The total number of the periods used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    suspendPeriods?: number;
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * The period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    suspendPeriodsType?: GetOrderSuspendSuspendPeriodsTypeEnum;
    /**
     * Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     */
    suspendPolicy?: GetOrderSuspendSuspendPolicyEnum;
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `SpecificDate`. Note this field is not applicable in a Suspend order action auto-created by the Order Metrics migration.
     *
     * @remarks
     *
     * A specific date when the subscription suspension takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription's contract effective date or later than the subscription's term end date.
     *
     */
    suspendSpecificDate?: Date;
}
