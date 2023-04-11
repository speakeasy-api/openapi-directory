import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardIssueZoomRoomSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardIssueZoomRoomRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * End date.
     */
    to: Date;
}
export declare class DashboardIssueZoomRoom200ApplicationXMLZoomRooms extends SpeakeasyBase {
    /**
     * Zoom Room ID
     */
    id?: string;
    /**
     * Issue Count of Zoom Room
     */
    issuesCount?: number;
    /**
     * Zoom Room Name
     */
    roomName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room with issue details returned
 */
export declare class DashboardIssueZoomRoom200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
    zoomRooms?: DashboardIssueZoomRoom200ApplicationXMLZoomRooms[];
}
export declare class DashboardIssueZoomRoom200ApplicationJSONZoomRooms extends SpeakeasyBase {
    /**
     * Zoom Room ID
     */
    id?: string;
    /**
     * Issue Count of Zoom Room
     */
    issuesCount?: number;
    /**
     * Zoom Room Name
     */
    roomName?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room with issue details returned
 */
export declare class DashboardIssueZoomRoom200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
    zoomRooms?: DashboardIssueZoomRoom200ApplicationJSONZoomRooms[];
}
export declare class DashboardIssueZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Zoom Room with issue details returned
     */
    dashboardIssueZoomRoom200ApplicationJSONObject?: DashboardIssueZoomRoom200ApplicationJSON;
}
