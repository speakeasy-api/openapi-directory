import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardIssueZoomRoomQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class DashboardIssueZoomRoomSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardIssueZoomRoom200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    to?: Date;
    totalRecords?: number;
    zoomRooms?: any[];
}
export declare class DashboardIssueZoomRoomRequest extends SpeakeasyBase {
    queryParams: DashboardIssueZoomRoomQueryParams;
    security: DashboardIssueZoomRoomSecurity;
}
export declare class DashboardIssueZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardIssueZoomRoom200ApplicationJSONObject?: DashboardIssueZoomRoom200ApplicationJson;
}
