import { SpeakeasyBase } from "../../../internal/utils";
export declare class SelectedAddress extends SpeakeasyBase {
    /**
     * Selected address ID.
     */
    addressId: string;
    /**
     * Selected adress's shipping type, which can be `pickup`, `residential`, `invoice`, `search`, `inStore`, `commercial` or `giftRegistry`.
     */
    addressType: string;
    /**
     * City of the selected address.
     */
    city: string;
    /**
     * Complement to the selected address if it applies.
     */
    complement: string;
    /**
     * Three letters ISO code of the country of the selected address (ISO 3166 ALPHA-3).
     */
    country: string;
    /**
     * Shipping address entity ID  of the selected address.
     */
    entityId: string;
    /**
     * Array with two numbers with the selected address's geocoordinates, first longitude then latitude.
     */
    geoCoordinates: string[];
    /**
     * Neighborhood of the selected address.
     */
    neighborhood: string;
    /**
     * Number of the building, house or apartment of the selected address.
     */
    number: string;
    /**
     * Postal code of the selected address.
     */
    postalCode: string;
    /**
     * Name of the person who is going to receive the order in the selected address.
     */
    receiverName: string;
    /**
     * Complement to help locate the selected address.
     */
    reference: string;
    /**
     * State of the selected address.
     */
    state: string;
    /**
     * Street of the selected address.
     */
    street: string;
    /**
     * Shipping address version ID of the selected address.
     */
    versionId: string;
}
