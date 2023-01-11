import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPhoneDevicesTypeEnum {
    Assigned = "assigned",
    Unassigned = "unassigned"
}
export declare class ListPhoneDevicesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type: ListPhoneDevicesTypeEnum;
}
export declare class ListPhoneDevicesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListPhoneDevices200ApplicationJsonDevicesAssignee extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
}
export declare class ListPhoneDevices200ApplicationJsonDevicesSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum ListPhoneDevices200ApplicationJsonDevicesStatusEnum {
    Online = "online",
    Offline = "offline"
}
export declare class ListPhoneDevices200ApplicationJsonDevices extends SpeakeasyBase {
    assignee?: ListPhoneDevices200ApplicationJsonDevicesAssignee;
    deviceType?: string;
    displayName?: string;
    id?: string;
    macAddress?: string;
    site?: ListPhoneDevices200ApplicationJsonDevicesSite;
    status?: ListPhoneDevices200ApplicationJsonDevicesStatusEnum;
}
export declare class ListPhoneDevices200ApplicationJson extends SpeakeasyBase {
    devices?: ListPhoneDevices200ApplicationJsonDevices[];
    nextPageToken?: string;
    pageSize?: number;
    totalRecords?: string;
}
export declare class ListPhoneDevicesRequest extends SpeakeasyBase {
    queryParams: ListPhoneDevicesQueryParams;
    security: ListPhoneDevicesSecurity;
}
export declare class ListPhoneDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPhoneDevices200ApplicationJSONObject?: ListPhoneDevices200ApplicationJson;
}
