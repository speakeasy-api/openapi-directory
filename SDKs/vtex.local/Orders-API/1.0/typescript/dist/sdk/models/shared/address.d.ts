import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Shipping address details.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * Shipping address ID.
     */
    addressId: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`, among others.
     */
    addressType: string;
    /**
     * City of the shipping address.
     */
    city: string;
    /**
     * Complement to the shipping address when it applies.
     */
    complement: string;
    /**
     * Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3).
     */
    country: string;
    /**
     * Shipping address entity ID.
     */
    entityId: string;
    /**
     * Array with two numbers with geocoordinates, first longitude then latitude.
     */
    geoCoordinates: string[];
    /**
     * Neighborhood of the shipping address.
     */
    neighborhood: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number: string;
    /**
     * Postal code of the shipping address.
     */
    postalCode: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName: string;
    /**
     * Complement to help locate the shipping address, in case of delivery.
     */
    reference: string;
    /**
     * State of the shipping address.
     */
    state: string;
    /**
     * Street of the shipping address.
     */
    street: string;
    /**
     * Shipping address version ID.
     */
    versionId: string;
}
