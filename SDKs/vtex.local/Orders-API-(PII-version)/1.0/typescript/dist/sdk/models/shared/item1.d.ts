import { SpeakeasyBase } from "../../../internal/utils";
export declare class Item1 extends SpeakeasyBase {
    /**
     * Index of the SKU being invoiced.
     */
    itemIndex: string;
    /**
     * Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
     */
    price: number;
    /**
     * Quantity cof the SKU being invoiced.
     */
    quantity: number;
}
