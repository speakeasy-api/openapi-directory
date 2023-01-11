import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionAmendInvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountingCode" })
  accountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AppliedToInvoiceItemId" })
  appliedToInvoiceItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeAmount" })
  chargeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=ChargeDate" })
  chargeDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ChargeDescription" })
  chargeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeId" })
  chargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeName" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeType" })
  chargeType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingType" })
  processingType?: number;

  @SpeakeasyMetadata({ data: "json, name=ProductDescription" })
  productDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=RevRecCode" })
  revRecCode?: string;

  @SpeakeasyMetadata({ data: "json, name=RevRecStartDate" })
  revRecStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RevRecTriggerCondition" })
  revRecTriggerCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=SKU" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxExemptAmount" })
  taxExemptAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxMode" })
  taxMode?: string;

  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: string;

  @SpeakeasyMetadata({ data: "json, name=UnitPrice" })
  unitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
