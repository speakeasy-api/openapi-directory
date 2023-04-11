import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInfo } from "./additionalinfo";
import { ItemAttachment } from "./itemattachment";
export declare class ItemAttachmentOfferings extends SpeakeasyBase {
    /**
     * Name of the attachment.
     */
    name: string;
    /**
     * If the attachment is required (`true`) or not (`false`).
     */
    required: boolean;
    /**
     * Schema of the content declared in the field `attachmentOfferings`.
     */
    schema: Record<string, any>;
}
export declare class ItemPriceDefinitionsSellingPrices extends SpeakeasyBase {
    /**
     * Quantity of items.
     */
    quantity: number;
    /**
     * Total value of items in cents.
     */
    value: number;
}
/**
 * Item's price information.
 */
export declare class ItemPriceDefinitions extends SpeakeasyBase {
    /**
     * Item's calculated unitary selling price in cents.
     */
    calculatedSellingPrice: number;
    /**
     * Details on item's selling price.
     */
    sellingPrices: ItemPriceDefinitionsSellingPrices[];
    /**
     * Total value of all item's units in cents.
     */
    total: number;
}
export declare class Item extends SpeakeasyBase {
    /**
     * Additional information about the item.
     */
    additionalInfo: AdditionalInfo;
    /**
     * Retrieves information about orders item's customizations.
     */
    assemblies: any[];
    /**
     * List of attachments details.
     */
    attachmentOfferings: ItemAttachmentOfferings[];
    /**
     * Array containing information on attachments.
     */
    attachments: string[];
    /**
     * Information on services sold along with the item's SKU. For example, a gift package.
     */
    bundleItems: string[];
    /**
     * Call center operator responsible for the order.
     */
    callCenterOperator: string;
    /**
     * Commission value registered for the seller.
     */
    commission: number;
    /**
     * Item's components.
     */
    components: string[];
    /**
     * Item's cost price.
     */
    costPrice: number;
    /**
     * URL slug of the item.
     */
    detailUrl: string;
    /**
     * EAN of the SKU.
     */
    ean: string;
    /**
     * Value of the freight commission.
     */
    freightCommission: number;
    /**
     * Item's SKU ID, which is a unique numerical identifier.
     */
    id: string;
    /**
     * Item's SKU image URL.
     */
    imageUrl: string;
    /**
     * This field is `true` when the item is a gift in order context and `false` when it is not.
     */
    isGift: boolean;
    /**
     * Information about attachments, if it applies.
     */
    itemAttachment: ItemAttachment;
    /**
     * Item's list price.
     */
    listPrice: number;
    /**
     * Reservation ID.
     */
    lockId: string;
    /**
     * Item's manual price.
     */
    manualPrice: string;
    /**
     * Item's measurement unit.
     */
    measurementUnit: string;
    /**
     * Item's name.
     */
    name: string;
    /**
     * Item's offerings, which are services related to the item. For example, guarantee or installation.
     */
    offerings: string[];
    /**
     * Information about params.
     */
    params: string[];
    /**
     * Parent assembly binding.
     */
    parentAssemblyBinding: string;
    /**
     * Parent item index.
     */
    parentItemIndex: string;
    /**
     * Item's pre sale date.
     */
    preSaleDate: string;
    /**
     * Item's price.
     */
    price: number;
    /**
     * Item's price information.
     */
    priceDefinitions: ItemPriceDefinitions;
    /**
     * List of objects with item's price modifiers.
     */
    priceTags: string[];
    /**
     * Date until when the price is going to be valid if there is a promotion.
     */
    priceValidUntil: string;
    /**
     * ID of the Product associated with the item.
     */
    productId: string;
    /**
     * Quantity of items.
     */
    quantity: number;
    /**
     * Product referencial code associated with the item.
     */
    refId: string;
    /**
     * Item's reward value.
     */
    rewardValue: number;
    /**
     * Seller related to the order.
     */
    seller: string;
    /**
     * SKU ID from the seller perspective.
     */
    sellerSku: string;
    /**
     * Item's selling price.
     */
    sellingPrice: number;
    /**
     * This field identifies the order in the `handling` status in the workflow, and it was used for VTEX internal control.
     */
    serialNumbers: string;
    /**
     * Item's shipping price.
     */
    shippingPrice: string;
    /**
     * Item's tax.
     */
    tax: number;
    /**
     *  Item's tax code.
     */
    taxCode: string;
    /**
     * Unique ID is an alphanumeric sequence that identifies an SKU in a given order.
     */
    uniqueId: string;
    /**
     * Item's unit multiplier.
     */
    unitMultiplier: number;
}
