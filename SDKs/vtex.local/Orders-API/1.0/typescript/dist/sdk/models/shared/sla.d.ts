import { SpeakeasyBase } from "../../../internal/utils";
import { PickupStoreInfo } from "./pickupstoreinfo";
export declare class Sla extends SpeakeasyBase {
    /**
     * If the delivery channel is `delivery` or `pickup-in-point`.
     */
    deliveryChannel: string;
    /**
     * [Scheduled delivery window](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, if it applies to the item.
     */
    deliveryWindow: string;
    /**
     * ID of the shipping method used in the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).
     */
    id: string;
    /**
     * Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA.
     */
    lockTTL: string;
    /**
     * Name of the shipping policy.
     */
    name: string;
    /**
     * Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.
     */
    pickupDistance: number;
    /**
     * [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) ID related to the SLA.
     */
    pickupPointId: string;
    /**
     * Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
     */
    pickupStoreInfo: PickupStoreInfo;
    /**
     * Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.
     */
    polygonName: string;
    /**
     * Shipping price for the item in cents. Does not account for the whole order's shipping price.
     */
    price: number;
    /**
     * Total shipping estimate time in days. For instance, three business days is represented `3bd`.
     */
    shippingEstimate: string;
    /**
     * Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.
     */
    transitTime: string;
}
