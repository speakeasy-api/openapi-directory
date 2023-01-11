import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export enum GetOrderSuspendSuspendPolicyEnum {
    Today = "Today",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate"
}


// GetOrderSuspend
/** 
 * Information about an order action of type `Suspend`.
 * 
**/
export class GetOrderSuspend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suspendDate" })
  suspendDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=suspendPeriods" })
  suspendPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=suspendPeriodsType" })
  suspendPeriodsType?: GetOrderSuspendSuspendPeriodsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=suspendPolicy" })
  suspendPolicy?: GetOrderSuspendSuspendPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=suspendSpecificDate" })
  suspendSpecificDate?: Date;
}
