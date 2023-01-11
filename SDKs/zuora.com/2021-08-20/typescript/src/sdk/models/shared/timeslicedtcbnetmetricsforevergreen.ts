import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeSlicedTcbNetMetricsForEvergreenTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}


export class TimeSlicedTcbNetMetricsForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountChargeNumber" })
  discountChargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwner" })
  invoiceOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwner" })
  subscriptionOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=termNumber" })
  termNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TimeSlicedTcbNetMetricsForEvergreenTypeEnum;
}
