import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItemsRemoved extends SpeakeasyBase {
    /**
     * Id of removed item.
     */
    id: string;
    /**
     * Name of removed item.
     */
    name: string;
    /**
     * Removed items price in cents.
     */
    price: number;
    /**
     * Quantity of items removed.
     */
    quantity: number;
    /**
     * Removed item unit multiplier.
     */
    unitMultiplier: string;
}
