import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContact } from "./ordercontact";
export declare enum OrderLineItemCommonPostOrderItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export declare enum OrderLineItemCommonPostOrderItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
export declare enum OrderLineItemCommonPostOrderTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItemCommonPostOrder extends SpeakeasyBase {
    uom?: string;
    amountPerUnit?: number;
    billTargetDate?: Date;
    customFields?: Record<string, any>;
    deferredRevenueAccountingCode?: string;
    description?: string;
    itemName?: string;
    itemState?: OrderLineItemCommonPostOrderItemStateEnum;
    itemType?: OrderLineItemCommonPostOrderItemTypeEnum;
    listPricePerUnit?: number;
    productCode?: string;
    productRatePlanChargeId?: Date;
    purchaseOrderNumber?: string;
    quantity?: number;
    recognizedRevenueAccountingCode?: string;
    revenueRecognitionRule?: string;
    soldTo?: string;
    soldToData?: OrderContact;
    taxCode?: string;
    taxMode?: OrderLineItemCommonPostOrderTaxModeEnum;
    transactionDate?: Date;
}
