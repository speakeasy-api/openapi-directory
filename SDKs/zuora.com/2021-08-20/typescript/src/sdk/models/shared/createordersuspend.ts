import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateOrderSuspendSuspendPeriodsTypeEnum {
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year"
}

export enum CreateOrderSuspendSuspendPolicyEnum {
    Today = "Today",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    FixedPeriodsFromToday = "FixedPeriodsFromToday",
    SpecificDate = "SpecificDate"
}


// CreateOrderSuspend
/** 
 * Information about an order action of type `Suspend`.
 * 
**/
export class CreateOrderSuspend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suspendPeriods" })
  suspendPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=suspendPeriodsType" })
  suspendPeriodsType?: CreateOrderSuspendSuspendPeriodsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=suspendPolicy" })
  suspendPolicy: CreateOrderSuspendSuspendPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=suspendSpecificDate" })
  suspendSpecificDate?: Date;
}
