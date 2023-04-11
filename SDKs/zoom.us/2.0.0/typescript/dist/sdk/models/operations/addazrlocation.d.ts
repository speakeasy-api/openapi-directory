import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddAZRLocationSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AddAZRLocationApplicationJSON extends SpeakeasyBase {
    /**
     * Name of the location. The name must be unique and shouldn't have already been used in the same account.
     */
    name?: string;
    /**
     * The location ID of the location that is a level higher from the location that is being added.<br><br> For example, to add a City named "City 1" as the child location under a State named "State 1", you must provide the location ID of "State 1". This can be retrieved using the [List Zoom Room Locations](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) API.
     */
    parentLocationId?: string;
}
/**
 * Type of location. The value should be one of the following:<br>
 *
 * @remarks
 * `country`, `states`, `city`, `campus`, `building`, `floor`.
 */
export declare enum AddAZRLocation200ApplicationXMLTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Location added successfully.
 */
export declare class AddAZRLocation200ApplicationXML extends SpeakeasyBase {
    /**
     * Location ID: Unique Identifier of the location that was added.
     */
    id?: string;
    /**
     * Name of the location.
     */
    name?: string;
    /**
     * Unique Identifier of the parent location.
     */
    parentLocationId?: string;
    /**
     * Type of location. The value should be one of the following:<br>
     *
     * @remarks
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: AddAZRLocation200ApplicationXMLTypeEnum;
}
/**
 * Type of location. The value should be one of the following:<br>
 *
 * @remarks
 * `country`, `states`, `city`, `campus`, `building`, `floor`.
 */
export declare enum AddAZRLocation200ApplicationJSONTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Location added successfully.
 */
export declare class AddAZRLocation200ApplicationJSON extends SpeakeasyBase {
    /**
     * Location ID: Unique Identifier of the location that was added.
     */
    id?: string;
    /**
     * Name of the location.
     */
    name?: string;
    /**
     * Unique Identifier of the parent location.
     */
    parentLocationId?: string;
    /**
     * Type of location. The value should be one of the following:<br>
     *
     * @remarks
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: AddAZRLocation200ApplicationJSONTypeEnum;
}
export declare class AddAZRLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Location added successfully.
     */
    addAZRLocation200ApplicationJSONObject?: AddAZRLocation200ApplicationJSON;
}
