import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeviceListSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeviceListRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
/**
 * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
 */
export declare enum DeviceListH323SIPDeviceListTheH323SIPDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
/**
 * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
 */
export declare enum DeviceListH323SIPDeviceListTheH323SIPDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
 */
export declare class DeviceListH323SIPDeviceListTheH323SIPDeviceObject extends SpeakeasyBase {
    /**
     * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
     */
    encryption: DeviceListH323SIPDeviceListTheH323SIPDeviceObjectEncryptionEnum;
    /**
     * Device ID.
     */
    id?: string;
    /**
     * Device IP.
     */
    ip: string;
    /**
     * Device name.
     */
    name: string;
    /**
     * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
     */
    protocol: DeviceListH323SIPDeviceListTheH323SIPDeviceObjectProtocolEnum;
}
/**
 * Pagination Object.
 */
export declare class DeviceListH323SIPDeviceList extends SpeakeasyBase {
    /**
     * List of H.323/SIP Device objects.
     */
    devices?: DeviceListH323SIPDeviceListTheH323SIPDeviceObject[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class DeviceListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of H.323/SIP devices returned.<br>
     * **Error Code:** `200`<br>
     * No permission.
     */
    h323SIPDeviceList?: DeviceListH323SIPDeviceList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
