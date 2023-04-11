import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the seller associated with the order.
 */
export declare class Seller extends SpeakeasyBase {
    /**
     * URL of the endpoint for fulfillment of seller's orders.
     */
    fulfillmentEndpoint: string;
    /**
     * Seller ID that identifies the seller.
     */
    id: string;
    /**
     * URL of the seller's logo.
     */
    logo: string;
    /**
     * Seller's name.
     */
    name: string;
}
