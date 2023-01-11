import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceItemPreviewResultAdditionalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;
}

export enum InvoiceItemPreviewResultProcessingTypeEnum {
    Charge = "Charge",
    Discount = "Discount",
    Tax = "Tax"
}


export class InvoiceItemPreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: InvoiceItemPreviewResultAdditionalInfo;

  @SpeakeasyMetadata({ data: "json, name=amountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=appliedToChargeNumber" })
  appliedToChargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeDescription" })
  chargeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeName" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=processingType" })
  processingType?: InvoiceItemPreviewResultProcessingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=serviceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}
