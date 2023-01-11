import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}
export declare enum CreateOrderSuspendSuspendPolicyEnum {
    Today = "Today",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate"
}
/**
 * Information about an order action of type `Suspend`.
 *
**/
export declare class CreateOrderSuspend extends SpeakeasyBase {
    suspendPeriods?: number;
    suspendPeriodsType?: CreateOrderSuspendSuspendPeriodsTypeEnum;
    suspendPolicy: CreateOrderSuspendSuspendPolicyEnum;
    suspendSpecificDate?: Date;
}
