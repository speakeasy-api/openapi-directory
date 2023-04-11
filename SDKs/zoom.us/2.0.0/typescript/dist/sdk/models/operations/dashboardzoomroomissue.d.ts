import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardZoomRoomIssueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardZoomRoomIssueRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * End date.
     */
    to: Date;
}
export declare class DashboardZoomRoomIssue200ApplicationXMLIssues extends SpeakeasyBase {
    /**
     * Issue Name.<br> The value of the this field could be one of the following:<br>
     *
     * @remarks
     * * `Room Controller disconnected`<br>
     * * `Room Controller connected`
     * * `Selected camera has disconnected`
     * * `Selected camera is reconnected`
     * * `Selected microphone has disconnected`
     * * `Selected microphone is reconnected`
     * * `Selected speaker has disconnected`
     * * `Selected speaker is reconnected`
     * * `Zoom room is offline`
     * * `Zoom room is online`
     * * `High CPU usage is detected`
     * * `Low bandwidth network is detected`
     * * `{name} battery is low`
     * * `{name} battery is normal`
     * * `{name} disconnected`
     * * `{name} connected`
     * * `{name} is not charging`
     *
     * Possible values for {name}: <br>
     * * Zoom Rooms Computer
     * * Controller
     * * Scheduling Display
     */
    issueName?: string;
    /**
     * Zoom Room Count of Issue
     */
    zoomRoomsCount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room Issue details returned
 */
export declare class DashboardZoomRoomIssue200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    issues?: DashboardZoomRoomIssue200ApplicationXMLIssues[];
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class DashboardZoomRoomIssue200ApplicationJSONIssues extends SpeakeasyBase {
    /**
     * Issue Name.<br> The value of the this field could be one of the following:<br>
     *
     * @remarks
     * * `Room Controller disconnected`<br>
     * * `Room Controller connected`
     * * `Selected camera has disconnected`
     * * `Selected camera is reconnected`
     * * `Selected microphone has disconnected`
     * * `Selected microphone is reconnected`
     * * `Selected speaker has disconnected`
     * * `Selected speaker is reconnected`
     * * `Zoom room is offline`
     * * `Zoom room is online`
     * * `High CPU usage is detected`
     * * `Low bandwidth network is detected`
     * * `{name} battery is low`
     * * `{name} battery is normal`
     * * `{name} disconnected`
     * * `{name} connected`
     * * `{name} is not charging`
     *
     * Possible values for {name}: <br>
     * * Zoom Rooms Computer
     * * Controller
     * * Scheduling Display
     */
    issueName?: string;
    /**
     * Zoom Room Count of Issue
     */
    zoomRoomsCount?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Zoom Room Issue details returned
 */
export declare class DashboardZoomRoomIssue200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    issues?: DashboardZoomRoomIssue200ApplicationJSONIssues[];
    /**
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages
     */
    totalRecords?: number;
}
export declare class DashboardZoomRoomIssueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Zoom Room Issue details returned
     */
    dashboardZoomRoomIssue200ApplicationJSONObject?: DashboardZoomRoomIssue200ApplicationJSON;
}
