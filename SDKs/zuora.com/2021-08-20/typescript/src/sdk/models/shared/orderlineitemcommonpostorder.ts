import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderContact } from "./ordercontact";


export enum OrderLineItemCommonPostOrderItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}

export enum OrderLineItemCommonPostOrderItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}

export enum OrderLineItemCommonPostOrderTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}


export class OrderLineItemCommonPostOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: string;

  @SpeakeasyMetadata({ data: "json, name=amountPerUnit" })
  amountPerUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=billTargetDate" })
  billTargetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deferredRevenueAccountingCode" })
  deferredRevenueAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=itemName" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=itemState" })
  itemState?: OrderLineItemCommonPostOrderItemStateEnum;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: OrderLineItemCommonPostOrderItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=listPricePerUnit" })
  listPricePerUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=recognizedRevenueAccountingCode" })
  recognizedRevenueAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueRecognitionRule" })
  revenueRecognitionRule?: string;

  @SpeakeasyMetadata({ data: "json, name=soldTo" })
  soldTo?: string;

  @SpeakeasyMetadata({ data: "json, name=soldToData" })
  soldToData?: OrderContact;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxMode" })
  taxMode?: OrderLineItemCommonPostOrderTaxModeEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: Date;
}
