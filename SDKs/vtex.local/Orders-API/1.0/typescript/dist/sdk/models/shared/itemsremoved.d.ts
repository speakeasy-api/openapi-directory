import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItemsRemoved extends SpeakeasyBase {
    /**
     * SKU ID of the item removed from the order.
     */
    id: string;
    /**
     * Name of the item removed from the order.
     */
    name: string;
    /**
     * Total amount of items removed from the order.
     */
    price: number;
    /**
     * Quantity of items removed from the order.
     */
    quantity: number;
    /**
     * Unit multiplier of the item removed from the order.
     */
    unitMultiplier: string;
}
