import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
 */
export declare class PickupStoreInfo extends SpeakeasyBase {
    /**
     * Additional information about the pickup point.
     */
    additionalInfo: string;
    /**
     * Pickup point's address.
     */
    address: string;
    /**
     * ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) related to the delivery or the pickup point.
     */
    dockId: string;
    /**
     * Name of the pickup point displayed at checkout.
     */
    friendlyName: string;
    /**
     * If this field is set `true`, it means the type of shipping is pickup, and if set as `false`, it is not.
     */
    isPickupStore: boolean;
}
