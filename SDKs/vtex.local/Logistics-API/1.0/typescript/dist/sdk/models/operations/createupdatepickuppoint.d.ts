import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUpdatePickupPointRequestBodyAddressCountry extends SpeakeasyBase {
    /**
     * Three letter ISO code of the address country.
     */
    acronym: string;
    /**
     * Address country name.
     */
    name: string;
}
export declare class CreateUpdatePickupPointRequestBodyAddressLocation extends SpeakeasyBase {
    /**
     * latitude
     */
    latitude: number;
    /**
     * longitude
     */
    longitude: number;
}
export declare class CreateUpdatePickupPointRequestBodyAddress extends SpeakeasyBase {
    /**
     * Address city.
     */
    city: string;
    /**
     * Address complement.
     */
    complement: string;
    country: CreateUpdatePickupPointRequestBodyAddressCountry;
    location: CreateUpdatePickupPointRequestBodyAddressLocation;
    /**
     * Address neighborhood.
     */
    neighborhood: string;
    /**
     * Address street number.
     */
    number: string;
    /**
     * Postal code.
     */
    postalCode: string;
    /**
     * Complement that might help locate the shipping address more precisely in case of delivery.
     */
    reference: string;
    /**
     * Address state.
     */
    state: string;
    /**
     * Address street name.
     */
    street: string;
}
export declare class CreateUpdatePickupPointRequestBodyBusinessHour extends SpeakeasyBase {
    closingTime: string;
    dayOfWeek: number;
    openingTime: string;
}
export declare class CreateUpdatePickupPointRequestBody extends SpeakeasyBase {
    address: CreateUpdatePickupPointRequestBodyAddress;
    businessHours: CreateUpdatePickupPointRequestBodyBusinessHour[];
    /**
     * Pickup point description.
     */
    description: string;
    /**
     * Formated address.
     */
    formattedAddress: string;
    /**
     * Pickup Point ID. Cannot contain spaces.
     */
    id: string;
    /**
     * Pickup point instructions.
     */
    instructions: string;
    isActive: boolean;
    isThirdPartyPickup?: boolean;
    /**
     * Pickup point name.
     */
    name: string;
    tagsLabel: string[];
}
export declare class CreateUpdatePickupPointRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    requestBody: CreateUpdatePickupPointRequestBody;
    /**
     * Pickup Point ID. Cannot contain spaces.
     */
    pickupPointId: string;
}
export declare class CreateUpdatePickupPointCreateUpdateAddress2Country extends SpeakeasyBase {
    acronym: string;
    name: string;
}
export declare class CreateUpdatePickupPointCreateUpdateAddress2Location5 extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class CreateUpdatePickupPointCreateUpdateAddress2 extends SpeakeasyBase {
    city: string;
    complement: string;
    country: CreateUpdatePickupPointCreateUpdateAddress2Country;
    location: CreateUpdatePickupPointCreateUpdateAddress2Location5;
    neighborhood: string;
    number: string;
    postalCode: string;
    reference: string;
    state: string;
    street: string;
}
export declare class CreateUpdatePickupPointCreateUpdateBusinessHour extends SpeakeasyBase {
    closingTime: string;
    dayOfWeek: number;
    openingTime: string;
}
export declare class CreateUpdatePickupPointCreateUpdate extends SpeakeasyBase {
    address: CreateUpdatePickupPointCreateUpdateAddress2;
    businessHours: CreateUpdatePickupPointCreateUpdateBusinessHour[];
    description: string;
    formattedAddress: string;
    id: string;
    instructions: string;
    isActive: boolean;
    name: string;
    pickupHolidays: string[];
    tagsLabel: string[];
}
export declare class CreateUpdatePickupPointResponse extends SpeakeasyBase {
    contentType: string;
    createUpdate?: CreateUpdatePickupPointCreateUpdate;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
