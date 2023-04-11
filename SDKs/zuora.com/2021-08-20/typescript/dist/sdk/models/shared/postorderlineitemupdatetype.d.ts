import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the Order Line Item (OLI). See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
 *
 * @remarks
 *
 * To generate invoice for an OLI, you must set this field to `SentToBilling` and set the `billTargetDate` field .
 *
 * You can update this field for an OLI only when the OLI is in the `Executing` or `SentToBilling`state (when the `itemState` field is set as `Executing` or `SentToBilling`).
 *
 */
export declare enum PostOrderLineItemUpdateTypeItemStateEnum {
    Executing = "Executing",
    SentToBilling = "SentToBilling",
    Complete = "Complete",
    Cancelled = "Cancelled"
}
/**
 * The type of the Order Line Item (OLI).
 *
 * @remarks
 *
 * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
 *
 */
export declare enum PostOrderLineItemUpdateTypeItemTypeEnum {
    Product = "Product",
    Fee = "Fee",
    Services = "Services"
}
/**
 * The tax mode for the Order Line Item (OLI).
 *
 * @remarks
 *
 * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
 *
 */
export declare enum PostOrderLineItemUpdateTypeTaxModeEnum {
    TaxInclusive = "TaxInclusive",
    TaxExclusive = "TaxExclusive"
}
export declare class PostOrderLineItemUpdateType extends SpeakeasyBase {
    /**
     * Specifies the units to measure usage.
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    uom?: string;
    /**
     * The accountingCode for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    accountingCode?: string;
    /**
     * The actual charged amount per unit for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    amountPerUnit?: number;
    /**
     * The target date for the Order Line Item (OLI) to be picked up by bill run for generating invoice.
     *
     * @remarks
     *
     * To generate invoice for an OLI, you must set this field and set the `itemState` field to `SentToBilling`.
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
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
     * The deferred revenue accounting code for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    deferredRevenueAccountingCode?: string;
    /**
     * The description of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    description?: string;
    /**
     * The sytem generated Id for the Order Line Item(OLI). Use this field to specify which OLI to update.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The name of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    itemName?: string;
    /**
     * The number for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    itemNumber?: string;
    /**
     * The state of the Order Line Item (OLI). See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.
     *
     * @remarks
     *
     * To generate invoice for an OLI, you must set this field to `SentToBilling` and set the `billTargetDate` field .
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` or `SentToBilling`state (when the `itemState` field is set as `Executing` or `SentToBilling`).
     *
     */
    itemState?: PostOrderLineItemUpdateTypeItemStateEnum;
    /**
     * The type of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    itemType?: PostOrderLineItemUpdateTypeItemTypeEnum;
    /**
     * The list price per unit for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    listPricePerUnit?: number;
    /**
     * The product code for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    productCode?: string;
    /**
     * Used by customers to specify the Purchase Order Number provided by the buyer.
     *
     * @remarks
     *
     * You can update this field for an Order Line Item (OLI) only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    purchaseOrderNumber?: string;
    /**
     * The quantity of units, such as the number of authors in a hosted wiki service.
     *
     * @remarks
     *
     * You can update this field for an Order Line Item (OLI) only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    quantity?: number;
    /**
     * The recognized revenue accounting code for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    recognizedRevenueAccountingCode?: string;
    /**
     * The Revenue Recognition rule for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    revenueRecognitionRule?: string;
    /**
     * The tax code for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    taxCode?: string;
    /**
     * The tax mode for the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    taxMode?: PostOrderLineItemUpdateTypeTaxModeEnum;
    /**
     * The transaction date of the Order Line Item (OLI).
     *
     * @remarks
     *
     * You can update this field for an OLI only when the OLI is in the `Executing` state (when the `itemState` field is set as `Executing`).
     *
     */
    transactionDate?: Date;
}
