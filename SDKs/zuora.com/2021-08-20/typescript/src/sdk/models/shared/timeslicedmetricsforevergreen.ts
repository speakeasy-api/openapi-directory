import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeSlicedMetricsForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwner" })
  invoiceOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwner" })
  subscriptionOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=termNumber" })
  termNumber?: number;
}
