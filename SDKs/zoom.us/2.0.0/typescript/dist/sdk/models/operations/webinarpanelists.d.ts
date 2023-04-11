import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPanelistsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPanelistsRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Panelist base object.
 */
export declare class WebinarPanelistsPanelistListPanelists extends SpeakeasyBase {
    /**
     * Panelist's email.
     */
    email?: string;
    /**
     * Panelist's ID.
     */
    id?: string;
    /**
     * Join URL.
     */
    joinUrl?: string;
    /**
     * Panelist's full name.
     */
    name?: string;
}
/**
 * List of panelists.
 */
export declare class WebinarPanelistsPanelistList extends SpeakeasyBase {
    /**
     * List of panelist objects.
     */
    panelists?: WebinarPanelistsPanelistListPanelists[];
    /**
     * Total records.
     */
    totalRecords?: number;
}
export declare class WebinarPanelistsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar plan subscription missing. Enable webinar for this user once the subscription is added.
     */
    panelistList?: WebinarPanelistsPanelistList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
