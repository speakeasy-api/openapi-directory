import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListZoomRoomsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The status of the Zoom Room.
 */
export declare enum ListZoomRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}
/**
 * Type of the Zoom Rooms.
 */
export declare enum ListZoomRoomsTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class ListZoomRoomsRequest extends SpeakeasyBase {
    /**
     * Parent location ID of the Zoom Room.
     */
    locationId?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The status of the Zoom Room.
     */
    status?: ListZoomRoomsStatusEnum;
    /**
     * Type of the Zoom Rooms.
     */
    type?: ListZoomRoomsTypeEnum;
    /**
     * Use this query parameter with a value of `true` if you would like to see Zoom Rooms in your account that have not been assigned to anyone yet.
     */
    unassignedRooms?: boolean;
}
/**
 * Status of the Zoom Room.
 */
export declare enum ListZoomRooms200ApplicationXMLRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}
export declare class ListZoomRooms200ApplicationXMLRooms extends SpeakeasyBase {
    /**
     * Activation Code is the code that is used to complete the setup of the Zoom Room.
     */
    activationCode?: string;
    /**
     * Unique Identifier of the Zoom Room.
     */
    id?: string;
    /**
     * Unique Identifier of the [location](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) of the room.
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
     * Status of the Zoom Room.
     */
    status?: ListZoomRooms200ApplicationXMLRoomsStatusEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * A list of Zoom Rooms returned successfully.
 */
export declare class ListZoomRooms200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * List of existing Zoom Rooms.
     */
    rooms?: ListZoomRooms200ApplicationXMLRooms[];
}
/**
 * Status of the Zoom Room.
 */
export declare enum ListZoomRooms200ApplicationJSONRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}
export declare class ListZoomRooms200ApplicationJSONRooms extends SpeakeasyBase {
    /**
     * Activation Code is the code that is used to complete the setup of the Zoom Room.
     */
    activationCode?: string;
    /**
     * Unique Identifier of the Zoom Room.
     */
    id?: string;
    /**
     * Unique Identifier of the [location](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms-location/listzrlocations) of the room.
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
     * Status of the Zoom Room.
     */
    status?: ListZoomRooms200ApplicationJSONRoomsStatusEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * A list of Zoom Rooms returned successfully.
 */
export declare class ListZoomRooms200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * List of existing Zoom Rooms.
     */
    rooms?: ListZoomRooms200ApplicationJSONRooms[];
}
export declare class ListZoomRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * A list of Zoom Rooms returned successfully.
     */
    listZoomRooms200ApplicationJSONObject?: ListZoomRooms200ApplicationJSON;
}
