import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class AddressDTO extends SpeakeasyBase {
    /**
     * first line of address
     */
    addressLine1?: string;
    /**
     * second line of address
     */
    addressLine2?: string;
    /**
     * city
     */
    city?: string;
    /**
     * country
     */
    countryId?: number;
    /**
     * postal code
     */
    postalCode?: string;
    /**
     * province
     */
    provinceId?: number;
    /**
     * should billing address be used instead of this one
     */
    sameAsBillingAddress?: boolean;
}
