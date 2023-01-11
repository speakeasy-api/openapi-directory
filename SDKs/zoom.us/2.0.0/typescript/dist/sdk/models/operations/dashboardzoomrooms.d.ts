import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardZoomRoomsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class DashboardZoomRoomsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Zoom room.
**/
export declare class DashboardZoomRoomsZoomRoomListZoomRoom extends SpeakeasyBase {
    accountType?: string;
    calenderName?: string;
    camera?: string;
    deviceIp?: string;
    email?: string;
    health?: string;
    id?: string;
    issues?: string[];
    lastStartTime?: string;
    location?: string;
    microphone?: string;
    roomName?: string;
    speaker?: string;
    status?: string;
}
/**
 * Pagination Object.
**/
export declare class DashboardZoomRoomsZoomRoomList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
    zoomRooms?: DashboardZoomRoomsZoomRoomListZoomRoom[];
}
export declare class DashboardZoomRoomsRequest extends SpeakeasyBase {
    queryParams: DashboardZoomRoomsQueryParams;
    security: DashboardZoomRoomsSecurity;
}
export declare class DashboardZoomRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    zoomRoomList?: DashboardZoomRoomsZoomRoomList;
}
