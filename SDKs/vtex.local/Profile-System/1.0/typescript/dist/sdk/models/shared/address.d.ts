import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * Name of administrative area, such as the state or province.
     */
    administrativeAreaLevel1: string;
    /**
     * Two letter country code.
     */
    countryCode?: string;
    /**
     * Name of the address country.
     */
    countryName: string;
    /**
     * Name of address locality, such as the city.
     */
    locality: string;
    /**
     * Name of the address locality area, such as the neighborhood or district.
     */
    localityAreaLevel1: string;
    /**
     * Address postal code.
     */
    postalCode: string;
    /**
     * Address route or street name.
     */
    route: string;
    /**
     * Address street number.
     */
    streetNumber: string;
}
