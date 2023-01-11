import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderContactRetrieveOrderLineItem } from "./ordercontactretrieveorderlineitem";


export enum OrderLineItemItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}

export enum OrderLineItemItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}

export enum OrderLineItemTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}


export class OrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: string;

  @SpeakeasyMetadata({ data: "json, name=accountingCode" })
  accountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

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

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemName" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=itemNumber" })
  itemNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=itemState" })
  itemState?: OrderLineItemItemStateEnum;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: OrderLineItemItemTypeEnum;

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
  soldToData?: OrderContactRetrieveOrderLineItem;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxMode" })
  taxMode?: OrderLineItemTaxModeEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: Date;
}
