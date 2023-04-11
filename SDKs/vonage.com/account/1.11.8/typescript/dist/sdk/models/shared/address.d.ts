import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * Street portion of the address
     */
    address1?: string;
    /**
     * Additional address information
     */
    address2?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * Country code
     */
    country?: string;
    /**
     * Postal code
     */
    postalCode?: string;
    /**
     * State/Province code
     */
    state?: string;
}
