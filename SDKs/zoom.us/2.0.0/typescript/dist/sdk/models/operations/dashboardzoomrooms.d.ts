import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardZoomRoomsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardZoomRoomsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * Zoom room.
 */
export declare class DashboardZoomRoomsZoomRoomListZoomRoom extends SpeakeasyBase {
    /**
     * Zoom room email type.
     */
    accountType?: string;
    /**
     * Zoom calendar name.
     */
    calenderName?: string;
    /**
     * Zoom room camera.
     */
    camera?: string;
    /**
     * Zoom room device IP.
     */
    deviceIp?: string;
    /**
     * Zoom room email.
     */
    email?: string;
    health?: string;
    /**
     * Zoom room ID.
     */
    id?: string;
    /**
     * Zoom Room issues.
     */
    issues?: string[];
    /**
     * Zoom room last start time.
     */
    lastStartTime?: string;
    /**
     * Zoom room location.
     */
    location?: string;
    /**
     * Zoom room microphone.
     */
    microphone?: string;
    /**
     * Zoom room name.
     */
    roomName?: string;
    /**
     * Zoom room speaker.
     */
    speaker?: string;
    /**
     * Zoom room status.
     */
    status?: string;
}
/**
 * Pagination Object.
 */
export declare class DashboardZoomRoomsZoomRoomList extends SpeakeasyBase {
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
    /**
     * Array of Zoom Rooms
     */
    zoomRooms?: DashboardZoomRoomsZoomRoomListZoomRoom[];
}
export declare class DashboardZoomRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of Zoom rooms returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    zoomRoomList?: DashboardZoomRoomsZoomRoomList;
}
