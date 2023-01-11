import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeSlicedMetricsGeneratedReasonEnum {
    IncreaseQuantity = "IncreaseQuantity",
    DecreaseQuantity = "DecreaseQuantity",
    ChangePrice = "ChangePrice",
    Extension = "Extension",
    Contraction = "Contraction"
}


export class TimeSlicedMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=generatedReason" })
  generatedReason?: TimeSlicedMetricsGeneratedReasonEnum;

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
}
