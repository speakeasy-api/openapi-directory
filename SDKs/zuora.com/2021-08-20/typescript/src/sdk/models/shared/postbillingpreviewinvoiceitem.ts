import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBillingPreviewInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedToItemId" })
  appliedToItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeAmount" })
  chargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeDate" })
  chargeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=chargeDescription" })
  chargeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeId" })
  chargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeName" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeType" })
  chargeType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=processingType" })
  processingType?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=serviceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionName" })
  subscriptionName?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;
}
