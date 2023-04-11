import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryId } from "./deliveryid";
import { PickupStoreInfo } from "./pickupstoreinfo";
import { Sla } from "./sla";
export declare class LogisticsInfo extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId: string;
    /**
     * Delivery channel.
     */
    deliveryChannel: string;
    /**
     * Delivery company.
     */
    deliveryCompany: string;
    /**
     * Array of delivery IDs.
     */
    deliveryIds: DeliveryId[];
    /**
     * Delivery window information.
     */
    deliveryWindow: string;
    /**
     * Item index, matching the index in the `items` array.
     */
    itemIndex: number;
    /**
     * List price in cents.
     */
    listPrice: number;
    /**
     * Reservation lasting period.
     */
    lockTTL: string;
    pickupStoreInfo: PickupStoreInfo;
    /**
     * Polygon name.
     */
    polygonName: string;
    /**
     * Prince in cents.
     */
    price: number;
    /**
     * Selected SLA.
     */
    selectedSla: string;
    /**
     * Selling price in cents.
     */
    sellingPrice: number;
    /**
     * Shipping estimate.
     */
    shippingEstimate: string;
    /**
     * Shipping estimate date.
     */
    shippingEstimateDate: string;
    /**
     * List of countries (three letter ISO code) to which shipping is available.
     */
    shipsTo: string[];
    /**
     * Array with information on the SLAs.
     */
    slas: Sla[];
}
