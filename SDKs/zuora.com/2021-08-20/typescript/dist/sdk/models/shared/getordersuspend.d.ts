import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
export declare enum GetOrderSuspendSuspendPolicyEnum {
    Today = "Today",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate"
}
/**
 * Information about an order action of type `Suspend`.
 *
**/
export declare class GetOrderSuspend extends SpeakeasyBase {
    suspendDate?: Date;
    suspendPeriods?: number;
    suspendPeriodsType?: GetOrderSuspendSuspendPeriodsTypeEnum;
    suspendPolicy?: GetOrderSuspendSuspendPolicyEnum;
    suspendSpecificDate?: Date;
}
