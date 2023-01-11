import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeSlicedNetMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}

export enum TimeSlicedNetMetricsTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}


export class TimeSlicedNetMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountChargeNumber" })
  discountChargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=generatedReason" })
  generatedReason?: TimeSlicedNetMetricsGeneratedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwner" })
  invoiceOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItemId" })
  orderItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwner" })
  subscriptionOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=termNumber" })
  termNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TimeSlicedNetMetricsTypeEnum;
}
