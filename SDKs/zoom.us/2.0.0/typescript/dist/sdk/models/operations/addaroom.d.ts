import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddARoomSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Type of the Zoom Room.
 */
export declare enum AddARoomApplicationJSONTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class AddARoomApplicationJSON extends SpeakeasyBase {
    /**
     * **Optional**<br>Location ID of the lowest level location in the [location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) where the Zoom Room is to be added. For instance if the structure of the location hierarchy is set up as “country, states, city, campus, building, floor”, a room can only be added under the floor level location.
     *
     * @remarks
     *
     * This ID can be retrieved from the [List Zoom Room Locations](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) API.
     */
    locationId?: string;
    /**
     * Name of the Zoom Room.
     */
    name: string;
    /**
     * Type of the Zoom Room.
     */
    type: AddARoomApplicationJSONTypeEnum;
}
/**
 * Type of the Zoom Room.
 */
export declare enum AddARoom201ApplicationXMLTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 * Zoom Room added successfully.
 */
export declare class AddARoom201ApplicationXML extends SpeakeasyBase {
    /**
     * Unique Identifier of the Zoom Room.
     */
    id?: string;
    /**
     * Location ID of the location where the Zoom Room was added.
     */
    locationId?: string;
    /**
     * Name of the Zoom Room.
     */
    name?: string;
    /**
     * Globally unique identifier of the Zoom Room. Use this ID for the **Dashboard Zoom Room APIs**.
     */
    roomId?: string;
    /**
     * Type of the Zoom Room.
     */
    type?: AddARoom201ApplicationXMLTypeEnum;
}
/**
 * Type of the Zoom Room.
 */
export declare enum AddARoom201ApplicationJSONTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 * Zoom Room added successfully.
 */
export declare class AddARoom201ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique Identifier of the Zoom Room.
     */
    id?: string;
    /**
     * Location ID of the location where the Zoom Room was added.
     */
    locationId?: string;
    /**
     * Name of the Zoom Room.
     */
    name?: string;
    /**
     * Globally unique identifier of the Zoom Room. Use this ID for the **Dashboard Zoom Room APIs**.
     */
    roomId?: string;
    /**
     * Type of the Zoom Room.
     */
    type?: AddARoom201ApplicationJSONTypeEnum;
}
export declare class AddARoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**<br>
     *
     * @remarks
     * Zoom Room added successfully.
     */
    addARoom201ApplicationJSONObject?: AddARoom201ApplicationJSON;
}
