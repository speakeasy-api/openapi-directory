import { SpeakeasyBase } from "../../../internal/utils";
export declare class Item2 extends SpeakeasyBase {
    /**
     * Description of items.
     */
    description: string;
    /**
     * EAN of the SKU.
     */
    ean: string;
    /**
     * Item's SKU ID, which is a unique numerical identifier.
     */
    id: string;
    /**
     * Item's price.
     */
    price: number;
    /**
     * ID of the Product associated with the item.
     */
    productId: string;
    /**
     * Quantity of SKUs.
     */
    quantity: number;
    /**
     * Item's reference ID.
     */
    refId: string;
    /**
     * Seller related to the order.
     */
    seller: string;
    /**
     * Details on item's selling price.
     */
    sellingPrice: number;
}
