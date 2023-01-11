import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostOrderLineItemUpdateTypeItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export declare enum PostOrderLineItemUpdateTypeItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
export declare enum PostOrderLineItemUpdateTypeTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class PostOrderLineItemUpdateType extends SpeakeasyBase {
    uom?: string;
    accountingCode?: string;
    amountPerUnit?: number;
    billTargetDate?: Date;
    customFields?: Record<string, any>;
    deferredRevenueAccountingCode?: string;
    description?: string;
    id: string;
    itemName?: string;
    itemNumber?: string;
    itemState?: PostOrderLineItemUpdateTypeItemStateEnum;
    itemType?: PostOrderLineItemUpdateTypeItemTypeEnum;
    listPricePerUnit?: number;
    productCode?: string;
    purchaseOrderNumber?: string;
    quantity?: number;
    recognizedRevenueAccountingCode?: string;
    revenueRecognitionRule?: string;
    taxCode?: string;
    taxMode?: PostOrderLineItemUpdateTypeTaxModeEnum;
    transactionDate?: Date;
}
