import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardIMSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardIMRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date.
     */
    to: Date;
}
export declare class DashboardIm200ApplicationXMLUsers extends SpeakeasyBase {
    /**
     * Total number of instant meeting calls received by the user.
     */
    callsReceive?: number;
    /**
     * Total number of instant meeting calls made by the user.
     */
    callsSend?: number;
    /**
     * User email.
     */
    email?: string;
    /**
     * Total number of emojis received by the user.
     */
    emojiReceive?: number;
    /**
     * Total number of emojis sent by the user.
     */
    emojiSend?: number;
    /**
     * Total number of files received by the user.
     */
    filesReceive?: number;
    /**
     * Total number of files sent by the user.
     */
    filesSend?: number;
    /**
     * Total number of messages received by the user in channels.
     */
    groupReceive?: number;
    /**
     * Total number of messages sent by the user in channels.
     */
    groupSend?: number;
    /**
     * Total number of images received by the user.
     */
    imagesReceive?: number;
    /**
     * Total number of images sent by the user.
     */
    imagesSend?: number;
    /**
     * Total number of messages received by the user.
     */
    totalReceive?: number;
    /**
     * Total number of messages sent by the user.
     */
    totalSend?: number;
    /**
     * User ID.
     */
    userId?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Total number of video files received by the user.
     */
    videosReceive?: number;
    /**
     * Total number of video files sent by the user.
     */
    videosSend?: number;
    /**
     * Total number of voice files received by the user.
     */
    voiceReceive?: number;
    /**
     * Total number of voice files sent by the user.
     */
    voiceSend?: number;
}
/**
 * Pagination object.
 */
export declare class DashboardIm200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
    users?: DashboardIm200ApplicationXMLUsers[];
}
export declare class DashboardIm200ApplicationJSONUsers extends SpeakeasyBase {
    /**
     * Total number of instant meeting calls received by the user.
     */
    callsReceive?: number;
    /**
     * Total number of instant meeting calls made by the user.
     */
    callsSend?: number;
    /**
     * User email.
     */
    email?: string;
    /**
     * Total number of emojis received by the user.
     */
    emojiReceive?: number;
    /**
     * Total number of emojis sent by the user.
     */
    emojiSend?: number;
    /**
     * Total number of files received by the user.
     */
    filesReceive?: number;
    /**
     * Total number of files sent by the user.
     */
    filesSend?: number;
    /**
     * Total number of messages received by the user in channels.
     */
    groupReceive?: number;
    /**
     * Total number of messages sent by the user in channels.
     */
    groupSend?: number;
    /**
     * Total number of images received by the user.
     */
    imagesReceive?: number;
    /**
     * Total number of images sent by the user.
     */
    imagesSend?: number;
    /**
     * Total number of messages received by the user.
     */
    totalReceive?: number;
    /**
     * Total number of messages sent by the user.
     */
    totalSend?: number;
    /**
     * User ID.
     */
    userId?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Total number of video files received by the user.
     */
    videosReceive?: number;
    /**
     * Total number of video files sent by the user.
     */
    videosSend?: number;
    /**
     * Total number of voice files received by the user.
     */
    voiceReceive?: number;
    /**
     * Total number of voice files sent by the user.
     */
    voiceSend?: number;
}
/**
 * Pagination object.
 */
export declare class DashboardIm200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
    users?: DashboardIm200ApplicationJSONUsers[];
}
export declare class DashboardIMResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * IM details returned.<br>
     * Only available for paid accounts that have enabled the dashboard feature.
     */
    dashboardIM200ApplicationJSONObject?: DashboardIm200ApplicationJSON;
}
