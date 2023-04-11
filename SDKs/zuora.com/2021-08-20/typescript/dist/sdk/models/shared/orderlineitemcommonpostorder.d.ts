import { SpeakeasyBase } from "../../../internal/utils";
import { OrderContact } from "./ordercontact";
/**
 * The state of an Order Line Item. If you want to generate invoice or preview invoice for order line items, you must set this field to `SentToBilling`.
 *
 * @remarks
 *
 * See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
 *
 */
export declare enum OrderLineItemCommonPostOrderItemStateEnum {
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
export declare enum OrderLineItemCommonPostOrderItemTypeEnum {
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
export declare enum OrderLineItemCommonPostOrderTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class OrderLineItemCommonPostOrder extends SpeakeasyBase {
    /**
     * Specifies the units to measure usage.
     *
     * @remarks
     *
     */
    uom?: string;
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
     * The name of the Order Line Item.
     *
     * @remarks
     *
     */
    itemName?: string;
    /**
     * The state of an Order Line Item. If you want to generate invoice or preview invoice for order line items, you must set this field to `SentToBilling`.
     *
     * @remarks
     *
     * See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
     *
     */
    itemState?: OrderLineItemCommonPostOrderItemStateEnum;
    /**
     * The type of the Order Line Item.
     *
     * @remarks
     *
     */
    itemType?: OrderLineItemCommonPostOrderItemTypeEnum;
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
     * The Id of an existing account. Use this field to assign an existing account as the sold-to contact of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can either use this field to assign an existing account or use the `soldToData` field to create a new account as the sold-to contact of the OLI.
     *
     * If neither this field nor the `soldToData` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
     *
     */
    soldTo?: string;
    /**
     * Use this field to create a new account as the sold-to contact of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI.
     *
     * If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
     *
     */
    soldToData?: OrderContact;
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
    taxMode?: OrderLineItemCommonPostOrderTaxModeEnum;
    /**
     * The transaction date of the Order Line Item.
     *
     * @remarks
     *
     */
    transactionDate?: Date;
}
