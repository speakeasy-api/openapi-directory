import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardIssueDetailZoomRoomPathParams extends SpeakeasyBase {
    zoomroomId: string;
}
export declare class DashboardIssueDetailZoomRoomQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class DashboardIssueDetailZoomRoomSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails extends SpeakeasyBase {
    issue?: string;
    time?: Date;
}
/**
 * Pagination object.
**/
export declare class DashboardIssueDetailZoomRoom200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    issueDetails?: DashboardIssueDetailZoomRoom200ApplicationJsonIssueDetails[];
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
export declare class DashboardIssueDetailZoomRoomRequest extends SpeakeasyBase {
    pathParams: DashboardIssueDetailZoomRoomPathParams;
    queryParams: DashboardIssueDetailZoomRoomQueryParams;
    security: DashboardIssueDetailZoomRoomSecurity;
}
export declare class DashboardIssueDetailZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardIssueDetailZoomRoom200ApplicationJSONObject?: DashboardIssueDetailZoomRoom200ApplicationJson;
}
