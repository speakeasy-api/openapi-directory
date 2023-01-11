import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListZoomRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}
export declare enum ListZoomRoomsTypeEnum {
    ZoomRoom = "ZoomRoom",
    SchedulingDisplayOnly = "SchedulingDisplayOnly",
    DigitalSignageOnly = "DigitalSignageOnly"
}
export declare class ListZoomRoomsQueryParams extends SpeakeasyBase {
    locationId?: string;
    nextPageToken?: string;
    pageSize?: number;
    status?: ListZoomRoomsStatusEnum;
    type?: ListZoomRoomsTypeEnum;
    unassignedRooms?: boolean;
}
export declare class ListZoomRoomsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListZoomRooms200ApplicationJsonRoomsStatusEnum {
    Offline = "Offline",
    Available = "Available",
    InMeeting = "InMeeting",
    UnderConstruction = "UnderConstruction"
}
export declare class ListZoomRooms200ApplicationJsonRooms extends SpeakeasyBase {
    activationCode?: string;
    id?: string;
    locationId?: string;
    name?: string;
    roomId?: string;
    status?: ListZoomRooms200ApplicationJsonRoomsStatusEnum;
}
export declare class ListZoomRooms200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    rooms?: ListZoomRooms200ApplicationJsonRooms[];
}
export declare class ListZoomRoomsRequest extends SpeakeasyBase {
    queryParams: ListZoomRoomsQueryParams;
    security: ListZoomRoomsSecurity;
}
export declare class ListZoomRoomsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listZoomRooms200ApplicationJSONObject?: ListZoomRooms200ApplicationJson;
}
