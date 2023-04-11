import { SpeakeasyBase } from "../../../internal/utils";
import { PickupStoreInfo } from "./pickupstoreinfo";
export declare class Sla extends SpeakeasyBase {
    /**
     * SLA delivery channel.
     */
    deliveryChannel: string;
    /**
     * SLA delivery window.
     */
    deliveryWindow: string;
    /**
     * SLA ID.
     */
    id: string;
    /**
     * SLA name.
     */
    name: string;
    pickupStoreInfo: PickupStoreInfo;
    /**
     * SLA polygon name.
     */
    polygonName: string;
    /**
     * SLA price in cents.
     */
    price: number;
    /**
     * SLA shipping estimate.
     */
    shippingEstimate: string;
}
