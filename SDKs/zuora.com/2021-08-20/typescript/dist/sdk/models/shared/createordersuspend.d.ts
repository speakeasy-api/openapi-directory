import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field.
 *
 * @remarks
 *
 * The period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
 *
 */
export declare enum CreateOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
/**
 * Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information.
 *
 * @remarks
 *
 */
export declare enum CreateOrderSuspendSuspendPolicyEnum {
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
export declare class CreateOrderSuspend extends SpeakeasyBase {
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriodsType` field.
     *
     * @remarks
     *
     * The total number of the periods used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    suspendPeriods?: number;
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `FixedPeriodsFromToday`. It must be used together with the `suspendPeriods` field.
     *
     * @remarks
     *
     * The period type used to specify when a subscription suspension takes effect. The subscription suspension will take place after the specified time frame (`suspendPeriods` multiplied by `suspendPeriodsType`) from today's date.
     *
     */
    suspendPeriodsType?: CreateOrderSuspendSuspendPeriodsTypeEnum;
    /**
     * Suspend methods. Specify a way to suspend a subscription. See [Suspend Date](https://knowledgecenter.zuora.com/BC_Subscription_Management/Subscriptions/Suspend_a_Subscription#Suspend_Date) for more information.
     *
     * @remarks
     *
     */
    suspendPolicy: CreateOrderSuspendSuspendPolicyEnum;
    /**
     * This field is applicable only when the `suspendPolicy` field is set to `SpecificDate`.
     *
     * @remarks
     *
     * A specific date when the subscription suspension takes effect, in YYYY-MM-DD format. The value should not be earlier than the subscription's contract effective date or later than the subscription's term end date.
     *
     */
    suspendSpecificDate?: Date;
}
