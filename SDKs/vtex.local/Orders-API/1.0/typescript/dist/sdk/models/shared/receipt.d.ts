import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the receipt for changed orders.
 */
export declare class Receipt extends SpeakeasyBase {
    /**
     * Date when the receipt was created.
     */
    date: string;
    /**
     * ID of the order.
     */
    orderId: string;
    /**
     * Receipt's unique identifier code.
     */
    receipt: string;
}
