import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSellersByRegionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Three letter country code refering to the `postalCode` field.
     */
    country: string;
    /**
     * Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.
     */
    geoCoordinates?: number[];
    /**
     * Postal code corresponding to the shopper's location.
     */
    postalCode?: string;
    /**
     * ID of the region corresponding to the shopper's location.
     */
    regionId: string;
}
export declare class GetSellersByRegion200ApplicationJSONSellers extends SpeakeasyBase {
    /**
     * Seller ID.
     */
    id?: string;
    /**
     * Seller logo.
     */
    logo?: string;
    /**
     * Seller name.
     */
    name?: string;
}
/**
 * OK
 */
export declare class GetSellersByRegion200ApplicationJSON extends SpeakeasyBase {
    /**
     * Region ID.
     */
    id?: string;
    /**
     * Array with information on each seller retrieved for the given region.
     */
    sellers?: GetSellersByRegion200ApplicationJSONSellers[];
}
export declare class GetSellersByRegionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getSellersByRegion200ApplicationJSONObject?: GetSellersByRegion200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
