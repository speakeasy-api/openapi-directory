import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAllPickupPpointsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
}
export declare class ListAllPickupPpoints200ApplicationJSONAddressCountry extends SpeakeasyBase {
    /**
     * Three letter ISO code.
     */
    acronym?: string;
    /**
     * Country name.
     */
    name?: string;
}
/**
 * Geolocation properties.
 */
export declare class ListAllPickupPpoints200ApplicationJSONAddressLocation extends SpeakeasyBase {
    /**
     * Latitude.
     */
    latitude?: number;
    /**
     * Longitude.
     */
    longitude?: number;
}
export declare class ListAllPickupPpoints200ApplicationJSONAddress extends SpeakeasyBase {
    /**
     * City.
     */
    city?: string;
    /**
     * Address complement.
     */
    complement?: string;
    country?: ListAllPickupPpoints200ApplicationJSONAddressCountry;
    /**
     * Geolocation properties.
     */
    location?: ListAllPickupPpoints200ApplicationJSONAddressLocation;
    /**
     * Neighborhood.
     */
    neighborhood?: string;
    /**
     * Pickup point address number.
     */
    number?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * State.
     */
    state?: string;
    /**
     * Street name.
     */
    street?: string;
}
export declare class ListAllPickupPpoints200ApplicationJSONBusinessHours extends SpeakeasyBase {
    /**
     * Closing time in `hh:mm:ss`.
     */
    closingTime?: string;
    /**
     * Day of the week, from `0` (sunday) to `6` (saturday).
     */
    dayOfWeek?: number;
    /**
     * Opening time in `hh:mm:ss`.
     */
    openingTime?: string;
}
export declare class ListAllPickupPpoints200ApplicationJSON extends SpeakeasyBase {
    /**
     * Account group ID.
     */
    accountGroupId?: string;
    /**
     * Account owner ID.
     */
    accountOwnerId?: string;
    /**
     * Account owner name.
     */
    accountOwnerName?: string;
    address?: ListAllPickupPpoints200ApplicationJSONAddress;
    /**
     * Business hours information for each day of the week.
     */
    businessHours?: ListAllPickupPpoints200ApplicationJSONBusinessHours[];
    /**
     * Pickup point description.
     */
    description?: string;
    /**
     * Distance.
     */
    distance?: number;
    /**
     * Formated address.
     */
    formattedAddress?: string;
    /**
     * Pickup point ID.
     */
    id?: string;
    /**
     * Instructions.
     */
    instructions?: string;
    /**
     * Indicates whether pickup point is active.
     */
    isActive?: boolean;
    /**
     * Indicates whether pickup point is third party.
     */
    isThirdPartyPickup?: boolean;
    /**
     * Pickup point name.
     */
    name?: string;
    /**
     * Original ID.
     */
    originalId?: string;
    /**
     * Parent account name.
     */
    parentAccountName?: string;
    /**
     * Holidays which apply for pickup point.
     */
    pickupHolidays?: string[];
    /**
     * Seller corresponding to pickup point.
     */
    seller?: string;
    /**
     * List of tags.
     */
    tagsLabel?: string[];
}
export declare class ListAllPickupPpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAllPickupPpoints200ApplicationJSONObjects?: ListAllPickupPpoints200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
