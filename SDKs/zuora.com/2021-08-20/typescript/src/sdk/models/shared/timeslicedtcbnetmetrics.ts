import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeSlicedTcbNetMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}

export enum TimeSlicedTcbNetMetricsTypeEnum {
    Regular = "Regular",
    Discount = "Discount"
}


export class TimeSlicedTcbNetMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountChargeNumber" })
  discountChargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=generatedReason" })
  generatedReason?: TimeSlicedTcbNetMetricsGeneratedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=invoiceOwner" })
  invoiceOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItemId" })
  orderItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionOwner" })
  subscriptionOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=termNumber" })
  termNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TimeSlicedTcbNetMetricsTypeEnum;
}
