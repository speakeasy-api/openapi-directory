import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListZrDevicesPathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class ListZrDevicesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum {
    ZoomRoomsComputer = "Zoom Rooms Computer",
    Controller = "Controller",
    SchedulingDisplay = "Scheduling Display",
    ZoomRoomsControlSystem = "Zoom Rooms Control System",
    CompanionWhiteboard = "Companion Whiteboard"
}
export declare enum ListZrDevices200ApplicationJsonDevicesStatusEnum {
    Online = "Online",
    Offline = "Offline"
}
export declare class ListZrDevices200ApplicationJsonDevices extends SpeakeasyBase {
    appVersion?: string;
    deviceSystem?: string;
    deviceType?: ListZrDevices200ApplicationJsonDevicesDeviceTypeEnum;
    id?: string;
    roomName?: string;
    status?: ListZrDevices200ApplicationJsonDevicesStatusEnum;
}
export declare class ListZrDevices200ApplicationJson extends SpeakeasyBase {
    devices?: ListZrDevices200ApplicationJsonDevices[];
}
export declare class ListZrDevicesRequest extends SpeakeasyBase {
    pathParams: ListZrDevicesPathParams;
    security: ListZrDevicesSecurity;
}
export declare class ListZrDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listZRDevices200ApplicationJSONObject?: ListZrDevices200ApplicationJson;
}
