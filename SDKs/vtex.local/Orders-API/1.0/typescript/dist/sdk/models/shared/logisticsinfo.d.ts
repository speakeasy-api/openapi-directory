import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryId } from "./deliveryid";
import { PickupStoreInfo } from "./pickupstoreinfo";
import { Sla } from "./sla";
export declare class LogisticsInfoDeliveryChannels extends SpeakeasyBase {
    /**
     * Delivery channel's shipping type, which can be `delivery` or `pickup-in-point`.
     */
    id: string;
    /**
     * Stock check for an SKU availability.
     */
    stockBalance: number;
}
export declare class LogisticsInfo extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId: string;
    /**
     * If the delivery channel is `delivery` or `pickup-in-point`.
     */
    deliveryChannel: string;
    /**
     * List of delivery channels associated with the trade policy.
     */
    deliveryChannels: LogisticsInfoDeliveryChannels[];
    /**
     * [Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) company's name.
     */
    deliveryCompany: string;
    /**
     * Information about delivery IDs.
     */
    deliveryIds: DeliveryId[];
    /**
     * [Scheduled delivery](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) window information, if it applies to the item.
     */
    deliveryWindow: string;
    /**
     * Shipping address entity ID.
     */
    entityId: string;
    /**
     * Index of the item starting from 0.
     */
    itemIndex: number;
    /**
     * SKU's optional price for a specific trade policy.
     */
    listPrice: number;
    /**
     * Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time.
     */
    lockTTL: string;
    /**
     * [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R)'s ID.
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
     * Selected shipping option.
     */
    selectedSla: string;
    /**
     * Item's selling price.
     */
    sellingPrice: number;
    /**
     * Total shipping estimate time in days. For instance, three business days is represented `3bd`.
     */
    shippingEstimate: string;
    /**
     * Shipping estimate date. It is defined only after the confirmation of the order.
     */
    shippingEstimateDate: string;
    /**
     * Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).
     */
    shipsTo: string[];
    /**
     * Information on Service Level Agreement (SLA), corresponding to [shipping policies](https://help.vtex.com/tutorial/shipping-policy--tutorials_140).
     */
    slas: Sla[];
    /**
     * Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`.
     */
    transitTime: string;
    /**
     * Shipping address version ID.
     */
    versionId: string;
}
