import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionSubscribeCreditMemoItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=ChargeName" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=UnitOfMeasure" })
  unitOfMeasure?: string;
}
