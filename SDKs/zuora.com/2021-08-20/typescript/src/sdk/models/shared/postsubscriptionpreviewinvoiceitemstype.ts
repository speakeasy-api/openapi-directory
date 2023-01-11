import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSubscriptionPreviewInvoiceItemsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeAmount" })
  chargeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=chargeDescription" })
  chargeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeName" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=serviceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;
}
