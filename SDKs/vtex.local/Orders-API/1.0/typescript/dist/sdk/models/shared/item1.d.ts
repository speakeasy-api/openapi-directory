import { SpeakeasyBase } from "../../../internal/utils";
export declare class Item1 extends SpeakeasyBase {
    /**
     * You can use this field for additional information about the SKU being invoiced.
     */
    description?: string;
    /**
     * ID of the SKU being invoiced.
     */
    id: string;
    /**
     * Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
     */
    price: number;
    /**
     * Quantity currently in inventory of the SKU being invoiced.
     */
    quantity: number;
}
