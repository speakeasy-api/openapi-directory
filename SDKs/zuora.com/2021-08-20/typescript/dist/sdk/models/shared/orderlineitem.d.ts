import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContactRetrieveOrderLineItem } from "./ordercontactretrieveorderlineitem";
export declare enum OrderLineItemItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export declare enum OrderLineItemItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
export declare enum OrderLineItemTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItem extends SpeakeasyBase {
    uom?: string;
    accountingCode?: string;
    amount?: number;
    amountPerUnit?: number;
    billTargetDate?: Date;
    customFields?: Record<string, any>;
    deferredRevenueAccountingCode?: string;
    description?: string;
    id?: string;
    itemName?: string;
    itemNumber?: string;
    itemState?: OrderLineItemItemStateEnum;
    itemType?: OrderLineItemItemTypeEnum;
    listPricePerUnit?: number;
    productCode?: string;
    productRatePlanChargeId?: Date;
    purchaseOrderNumber?: string;
    quantity?: number;
    recognizedRevenueAccountingCode?: string;
    revenueRecognitionRule?: string;
    soldTo?: string;
    soldToData?: OrderContactRetrieveOrderLineItem;
    taxCode?: string;
    taxMode?: OrderLineItemTaxModeEnum;
    transactionDate?: Date;
}
