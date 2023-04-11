import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListZRDevicesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListZRDevicesRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Zoom Room. This can be retrieved from the response of [List Zoom Rooms](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/listzoomrooms) API.
     */
    roomId: string;
}
/**
 * Type of the device. The value of this field can be one of the following:<br>`Zoom Rooms Computer`,<br> `Controller`, `Scheduling Display`, `Zoom Rooms Control System`, `Companion Whiteboard`
 */
export declare enum ListZRDevices200ApplicationXMLDevicesDeviceTypeEnum {
    ZoomRoomsComputer = "Zoom Rooms Computer",
    Controller = "Controller",
    SchedulingDisplay = "Scheduling Display",
    ZoomRoomsControlSystem = "Zoom Rooms Control System",
    CompanionWhiteboard = "Companion Whiteboard"
}
/**
 * Status of the device. The value can be either `Online` or `Offline`.
 */
export declare enum ListZRDevices200ApplicationXMLDevicesStatusEnum {
    Online = "Online",
    Offline = "Offline"
}
export declare class ListZRDevices200ApplicationXMLDevices extends SpeakeasyBase {
    /**
     * App version of Zoom Rooms.
     */
    appVersion?: string;
    /**
     * Operating system of the device.
     */
    deviceSystem?: string;
    /**
     * Type of the device. The value of this field can be one of the following:<br>`Zoom Rooms Computer`,<br> `Controller`, `Scheduling Display`, `Zoom Rooms Control System`, `Companion Whiteboard`
     */
    deviceType?: ListZRDevices200ApplicationXMLDevicesDeviceTypeEnum;
    /**
     * Unique identifier of the device.
     */
    id?: string;
    /**
     * Name of the Zoom Room.
     */
    roomName?: string;
    /**
     * Status of the device. The value can be either `Online` or `Offline`.
     */
    status?: ListZRDevices200ApplicationXMLDevicesStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**
 *
 * @remarks
 * Devices listed successfully.
 */
export declare class ListZRDevices200ApplicationXML extends SpeakeasyBase {
    devices?: ListZRDevices200ApplicationXMLDevices[];
}
/**
 * Type of the device. The value of this field can be one of the following:<br>`Zoom Rooms Computer`,<br> `Controller`, `Scheduling Display`, `Zoom Rooms Control System`, `Companion Whiteboard`
 */
export declare enum ListZRDevices200ApplicationJSONDevicesDeviceTypeEnum {
    ZoomRoomsComputer = "Zoom Rooms Computer",
    Controller = "Controller",
    SchedulingDisplay = "Scheduling Display",
    ZoomRoomsControlSystem = "Zoom Rooms Control System",
    CompanionWhiteboard = "Companion Whiteboard"
}
/**
 * Status of the device. The value can be either `Online` or `Offline`.
 */
export declare enum ListZRDevices200ApplicationJSONDevicesStatusEnum {
    Online = "Online",
    Offline = "Offline"
}
export declare class ListZRDevices200ApplicationJSONDevices extends SpeakeasyBase {
    /**
     * App version of Zoom Rooms.
     */
    appVersion?: string;
    /**
     * Operating system of the device.
     */
    deviceSystem?: string;
    /**
     * Type of the device. The value of this field can be one of the following:<br>`Zoom Rooms Computer`,<br> `Controller`, `Scheduling Display`, `Zoom Rooms Control System`, `Companion Whiteboard`
     */
    deviceType?: ListZRDevices200ApplicationJSONDevicesDeviceTypeEnum;
    /**
     * Unique identifier of the device.
     */
    id?: string;
    /**
     * Name of the Zoom Room.
     */
    roomName?: string;
    /**
     * Status of the device. The value can be either `Online` or `Offline`.
     */
    status?: ListZRDevices200ApplicationJSONDevicesStatusEnum;
}
/**
 * **HTTP Status Code:** `200` **OK**
 *
 * @remarks
 * Devices listed successfully.
 */
export declare class ListZRDevices200ApplicationJSON extends SpeakeasyBase {
    devices?: ListZRDevices200ApplicationJSONDevices[];
}
export declare class ListZRDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**
     *
     * @remarks
     * Devices listed successfully.
     */
    listZRDevices200ApplicationJSONObject?: ListZRDevices200ApplicationJSON;
}
