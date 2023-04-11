import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListZRLocationsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListZRLocationsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * A unique identifier of the parent location. For instance, if a Zoom Room is located in Floor 1 of Building A, the location of Building A will be the parent location of Floor 1. Use this parameter to filter the response by a specific location hierarchy level.
     */
    parentLocationId?: string;
    /**
     * Use this field to filter the response by the type of location. The value can be one of the following:
     *
     * @remarks
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: string;
}
/**
 * The type of location. The value can be one of the following:
 *
 * @remarks
 * `country`, `states`, `city`, `campus`, `building`, `floor`.
 */
export declare enum ListZRLocations200ApplicationXMLLocationsTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
export declare class ListZRLocations200ApplicationXMLLocations extends SpeakeasyBase {
    /**
     * Unique Identifier of the location.
     */
    id?: string;
    /**
     * Name of the location.
     */
    name?: string;
    /**
     * ID (Unique Identifier) of the parent location. For instance, if a Zoom Room is located in Floor 1 of Building A, the location of Building A will be the parent location of Floor 1 and the parent_location_id of Floor 1 will be the ID of Building A.<br>
     *
     * @remarks
     * The value of parent_location_id of the top-level location (country) is the Account ID of the Zoom account.
     */
    parentLocationId?: string;
    /**
     * The type of location. The value can be one of the following:
     *
     * @remarks
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: ListZRLocations200ApplicationXMLLocationsTypeEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Room locations listed successfully.
 *
 */
export declare class ListZRLocations200ApplicationXML extends SpeakeasyBase {
    locations?: ListZRLocations200ApplicationXMLLocations[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * The type of location. The value can be one of the following:
 *
 * @remarks
 * `country`, `states`, `city`, `campus`, `building`, `floor`.
 */
export declare enum ListZRLocations200ApplicationJSONLocationsTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
export declare class ListZRLocations200ApplicationJSONLocations extends SpeakeasyBase {
    /**
     * Unique Identifier of the location.
     */
    id?: string;
    /**
     * Name of the location.
     */
    name?: string;
    /**
     * ID (Unique Identifier) of the parent location. For instance, if a Zoom Room is located in Floor 1 of Building A, the location of Building A will be the parent location of Floor 1 and the parent_location_id of Floor 1 will be the ID of Building A.<br>
     *
     * @remarks
     * The value of parent_location_id of the top-level location (country) is the Account ID of the Zoom account.
     */
    parentLocationId?: string;
    /**
     * The type of location. The value can be one of the following:
     *
     * @remarks
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: ListZRLocations200ApplicationJSONLocationsTypeEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Zoom Room locations listed successfully.
 *
 */
export declare class ListZRLocations200ApplicationJSON extends SpeakeasyBase {
    locations?: ListZRLocations200ApplicationJSONLocations[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ListZRLocationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Zoom Room locations listed successfully.
     *
     */
    listZRLocations200ApplicationJSONObject?: ListZRLocations200ApplicationJSON;
}
