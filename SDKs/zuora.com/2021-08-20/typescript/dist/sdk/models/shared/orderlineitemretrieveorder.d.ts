import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContactRetrieveOrder } from "./ordercontactretrieveorder";
/**
 * The state of an Order Line Item. See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
 *
 * @remarks
 *
 */
export declare enum OrderLineItemRetrieveOrderItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
/**
 * The type of the Order Line Item.
 *
 * @remarks
 *
 */
export declare enum OrderLineItemRetrieveOrderItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
/**
 * The tax mode for the Order Line Item.
 *
 * @remarks
 *
 */
export declare enum OrderLineItemRetrieveOrderTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItemRetrieveOrder extends SpeakeasyBase {
    /**
     * Specifies the units to measure usage.
     *
     * @remarks
     *
     */
    uom?: string;
    /**
     * The calculated gross amount for the Order Line Item.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The actual charged amount per unit for the Order Line Item.
     *
     * @remarks
     *
     */
    amountPerUnit?: number;
    /**
     * The target date for the Order Line Item to be picked up by bill run for billing.
     *
     * @remarks
     *
     */
    billTargetDate?: Date;
    /**
     * Container for custom fields of an Order Line Item object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * The deferred revenue accounting code for the Order Line Item.
     *
     * @remarks
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The description of the Order Line Item.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The sytem generated Id for the Order Line Item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The name of the Order Line Item.
     *
     * @remarks
     *
     */
    itemName?: string;
    /**
     * The number for the Order Line Item.
     *
     * @remarks
     *
     */
    itemNumber?: string;
    /**
     * The state of an Order Line Item. See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
     *
     * @remarks
     *
     */
    itemState?: OrderLineItemRetrieveOrderItemStateEnum;
    /**
     * The type of the Order Line Item.
     *
     * @remarks
     *
     */
    itemType?: OrderLineItemRetrieveOrderItemTypeEnum;
    /**
     * The list price per unit for the Order Line Item.
     *
     * @remarks
     *
     */
    listPricePerUnit?: number;
    /**
     * The product code for the Order Line Item.
     *
     * @remarks
     *
     */
    productCode?: string;
    /**
     * Id of a Product Rate Plan Charge. Only one-time charges are supported.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: Date;
    /**
     * Used by customers to specify the Purchase Order Number provided by the buyer.
     *
     * @remarks
     *
     */
    purchaseOrderNumber?: string;
    /**
     * The quantity of units, such as the number of authors in a hosted wiki service.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * The recognized revenue accounting code for the Order Line Item.
     *
     * @remarks
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The Revenue Recognition rule for the Order Line Item.
     *
     * @remarks
     *
     */
    revenueRecognitionRule?: string;
    /**
     * The Id of an existing account, which is set as the sold-to contact of the order line item.
     *
     * @remarks
     *
     */
    soldTo?: string;
    /**
     * A new account created as the sold-to contact of the Order Line Item (OLI).
     *
     * @remarks
     *
     */
    soldToData?: OrderContactRetrieveOrder;
    /**
     * The tax code for the Order Line Item.
     *
     * @remarks
     *
     */
    taxCode?: string;
    /**
     * The tax mode for the Order Line Item.
     *
     * @remarks
     *
     */
    taxMode?: OrderLineItemRetrieveOrderTaxModeEnum;
    /**
     * The transaction date of the Order Line Item.
     *
     * @remarks
     *
     */
    transactionDate?: Date;
}
