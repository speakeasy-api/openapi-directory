import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderLineItemCommonItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export declare enum OrderLineItemCommonItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
export declare enum OrderLineItemCommonTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItemCommon extends SpeakeasyBase {
    uom?: string;
    accountingCode?: string;
    amountPerUnit?: number;
    billTargetDate?: Date;
    customFields?: Record<string, any>;
    deferredRevenueAccountingCode?: string;
    description?: string;
    itemName?: string;
    itemNumber?: string;
    itemState?: OrderLineItemCommonItemStateEnum;
    itemType?: OrderLineItemCommonItemTypeEnum;
    listPricePerUnit?: number;
    productCode?: string;
    purchaseOrderNumber?: string;
    quantity?: number;
    recognizedRevenueAccountingCode?: string;
    revenueRecognitionRule?: string;
    taxCode?: string;
    taxMode?: OrderLineItemCommonTaxModeEnum;
    transactionDate?: Date;
}
