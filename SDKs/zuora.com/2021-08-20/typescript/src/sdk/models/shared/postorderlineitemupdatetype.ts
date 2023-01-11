import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostOrderLineItemUpdateTypeItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}

export enum PostOrderLineItemUpdateTypeItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}

export enum PostOrderLineItemUpdateTypeTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}


export class PostOrderLineItemUpdateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: string;

  @SpeakeasyMetadata({ data: "json, name=accountingCode" })
  accountingCode?: string;

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
  id: string;

  @SpeakeasyMetadata({ data: "json, name=itemName" })
  itemName?: string;

  @SpeakeasyMetadata({ data: "json, name=itemNumber" })
  itemNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=itemState" })
  itemState?: PostOrderLineItemUpdateTypeItemStateEnum;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: PostOrderLineItemUpdateTypeItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=listPricePerUnit" })
  listPricePerUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=recognizedRevenueAccountingCode" })
  recognizedRevenueAccountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueRecognitionRule" })
  revenueRecognitionRule?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxMode" })
  taxMode?: PostOrderLineItemUpdateTypeTaxModeEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: Date;
}
