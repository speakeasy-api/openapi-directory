import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeviceListQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class DeviceListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
export declare enum DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
**/
export declare class DeviceListH323SipDeviceListTheH323SipDeviceObject extends SpeakeasyBase {
    encryption: DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum;
    id?: string;
    ip: string;
    name: string;
    protocol: DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum;
}
/**
 * Pagination Object.
**/
export declare class DeviceListH323SipDeviceList extends SpeakeasyBase {
    devices?: DeviceListH323SipDeviceListTheH323SipDeviceObject[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class DeviceListRequest extends SpeakeasyBase {
    queryParams: DeviceListQueryParams;
    security: DeviceListSecurity;
}
export declare class DeviceListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    h323SIPDeviceList?: DeviceListH323SipDeviceList;
    statusCode: number;
}
