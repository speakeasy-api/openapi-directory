import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardZoomRoomIssueQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class DashboardZoomRoomIssueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardZoomRoomIssue200ApplicationJsonIssues extends SpeakeasyBase {
    issueName?: string;
    zoomRoomsCount?: number;
}
export declare class DashboardZoomRoomIssue200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    issues?: DashboardZoomRoomIssue200ApplicationJsonIssues[];
    to?: Date;
    totalRecords?: number;
}
export declare class DashboardZoomRoomIssueRequest extends SpeakeasyBase {
    queryParams: DashboardZoomRoomIssueQueryParams;
    security: DashboardZoomRoomIssueSecurity;
}
export declare class DashboardZoomRoomIssueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardZoomRoomIssue200ApplicationJSONObject?: DashboardZoomRoomIssue200ApplicationJson;
}
