import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPhoneDevicesSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * State of the device. The value should be either `assigned` to list devices that have been assigned to user(s) or `unassigned` to list devices that have not yet been assigned to any user in the Zoom account.
 */
export declare enum ListPhoneDevicesTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned"
}
export declare class ListPhoneDevicesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * State of the device. The value should be either `assigned` to list devices that have been assigned to user(s) or `unassigned` to list devices that have not yet been assigned to any user in the Zoom account.
     */
    type: ListPhoneDevicesTypeEnum;
}
export declare class ListPhoneDevices200ApplicationXMLDevicesAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Zoom Phone used by the user.
     */
    extensionNumber?: number;
    /**
     * User ID of the user to whom the device has been assigned.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
export declare class ListPhoneDevices200ApplicationXMLDevicesSite extends SpeakeasyBase {
    /**
     * The [site](https://support.zoom.us/hc/en-us/articles/360020809672) of the phone user.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    name?: string;
}
/**
 * Status of the device. The value is either `online` or `offline`.
 */
export declare enum ListPhoneDevices200ApplicationXMLDevicesStatusEnum {
    Online = "online",
    Offline = "offline"
}
export declare class ListPhoneDevices200ApplicationXMLDevices extends SpeakeasyBase {
    assignee?: ListPhoneDevices200ApplicationXMLDevicesAssignee;
    /**
     * Includes manufacturer name and the model name.
     */
    deviceType?: string;
    /**
     * Display name of the device.
     */
    displayName?: string;
    /**
     * Device ID - Unique Identifier of the Device.
     */
    id?: string;
    /**
     * MAC address or serial number of the device.
     */
    macAddress?: string;
    site?: ListPhoneDevices200ApplicationXMLDevicesSite;
    /**
     * Status of the device. The value is either `online` or `offline`.
     */
    status?: ListPhoneDevices200ApplicationXMLDevicesStatusEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Devices listed successfully.
 */
export declare class ListPhoneDevices200ApplicationXML extends SpeakeasyBase {
    devices?: ListPhoneDevices200ApplicationXMLDevices[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for the query across all pages.
     */
    totalRecords?: string;
}
export declare class ListPhoneDevices200ApplicationJSONDevicesAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Zoom Phone used by the user.
     */
    extensionNumber?: number;
    /**
     * User ID of the user to whom the device has been assigned.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
export declare class ListPhoneDevices200ApplicationJSONDevicesSite extends SpeakeasyBase {
    /**
     * The [site](https://support.zoom.us/hc/en-us/articles/360020809672) of the phone user.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    name?: string;
}
/**
 * Status of the device. The value is either `online` or `offline`.
 */
export declare enum ListPhoneDevices200ApplicationJSONDevicesStatusEnum {
    Online = "online",
    Offline = "offline"
}
export declare class ListPhoneDevices200ApplicationJSONDevices extends SpeakeasyBase {
    assignee?: ListPhoneDevices200ApplicationJSONDevicesAssignee;
    /**
     * Includes manufacturer name and the model name.
     */
    deviceType?: string;
    /**
     * Display name of the device.
     */
    displayName?: string;
    /**
     * Device ID - Unique Identifier of the Device.
     */
    id?: string;
    /**
     * MAC address or serial number of the device.
     */
    macAddress?: string;
    site?: ListPhoneDevices200ApplicationJSONDevicesSite;
    /**
     * Status of the device. The value is either `online` or `offline`.
     */
    status?: ListPhoneDevices200ApplicationJSONDevicesStatusEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Devices listed successfully.
 */
export declare class ListPhoneDevices200ApplicationJSON extends SpeakeasyBase {
    devices?: ListPhoneDevices200ApplicationJSONDevices[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of records found for the query across all pages.
     */
    totalRecords?: string;
}
export declare class ListPhoneDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Devices listed successfully.
     */
    listPhoneDevices200ApplicationJSONObject?: ListPhoneDevices200ApplicationJSON;
}
