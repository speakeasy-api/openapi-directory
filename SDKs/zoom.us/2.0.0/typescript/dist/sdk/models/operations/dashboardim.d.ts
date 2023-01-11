import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardImQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class DashboardImSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardIm200ApplicationJsonUsers extends SpeakeasyBase {
    callsReceive?: number;
    callsSend?: number;
    email?: string;
    emojiReceive?: number;
    emojiSend?: number;
    filesReceive?: number;
    filesSend?: number;
    groupReceive?: number;
    groupSend?: number;
    imagesReceive?: number;
    imagesSend?: number;
    totalReceive?: number;
    totalSend?: number;
    userId?: string;
    userName?: string;
    videosReceive?: number;
    videosSend?: number;
    voiceReceive?: number;
    voiceSend?: number;
}
/**
 * Pagination object.
**/
export declare class DashboardIm200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
    users?: DashboardIm200ApplicationJsonUsers[];
}
export declare class DashboardImRequest extends SpeakeasyBase {
    queryParams: DashboardImQueryParams;
    security: DashboardImSecurity;
}
export declare class DashboardImResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardIM200ApplicationJSONObject?: DashboardIm200ApplicationJson;
}
