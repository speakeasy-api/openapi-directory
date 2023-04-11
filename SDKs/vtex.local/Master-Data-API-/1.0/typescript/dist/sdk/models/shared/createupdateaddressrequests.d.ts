import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUpdateAddressRequests extends SpeakeasyBase {
    /**
     * Address name.
     */
    addressName?: string;
    /**
     * Type of address. For example, `Residential` or `Pickup`, among others.
     */
    addressType?: string;
    /**
     * City of the shipping address.
     */
    city?: string;
    /**
     * Complement to the shipping address in case it applies.
     */
    complement?: string;
    /**
     * Three letter ISO code of the country of the shipping address.
     */
    country?: string;
    /**
     * Neighborhood of the address.
     */
    neighborhood?: string;
    /**
     * Number of the building, house or apartment in the shipping address.
     */
    number?: string;
    /**
     * Postal Code.
     */
    postalCode?: string;
    /**
     * Name of the person who is going to receive the order.
     */
    receiverName?: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference?: string;
    /**
     * State of the shipping address.
     */
    state?: string;
    /**
     * Street of the address.
     */
    street?: string;
    /**
     * ID of the customer to whom the address belongs.
     */
    userId?: string;
}
