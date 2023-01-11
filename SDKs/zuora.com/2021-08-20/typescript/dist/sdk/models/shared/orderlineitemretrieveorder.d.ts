import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContactRetrieveOrder } from "./ordercontactretrieveorder";
export declare enum OrderLineItemRetrieveOrderItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
export declare enum OrderLineItemRetrieveOrderItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
export declare enum OrderLineItemRetrieveOrderTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItemRetrieveOrder extends SpeakeasyBase {
    uom?: string;
    amount?: number;
    amountPerUnit?: number;
    billTargetDate?: Date;
    customFields?: Record<string, any>;
    deferredRevenueAccountingCode?: string;
    description?: string;
    id?: string;
    itemName?: string;
    itemNumber?: string;
    itemState?: OrderLineItemRetrieveOrderItemStateEnum;
    itemType?: OrderLineItemRetrieveOrderItemTypeEnum;
    listPricePerUnit?: number;
    productCode?: string;
    productRatePlanChargeId?: Date;
    purchaseOrderNumber?: string;
    quantity?: number;
    recognizedRevenueAccountingCode?: string;
    revenueRecognitionRule?: string;
    soldTo?: string;
    soldToData?: OrderContactRetrieveOrder;
    taxCode?: string;
    taxMode?: OrderLineItemRetrieveOrderTaxModeEnum;
    transactionDate?: Date;
}
